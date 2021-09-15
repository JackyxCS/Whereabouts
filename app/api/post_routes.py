from flask import Blueprint,request
from flask_login import login_required
from werkzeug.utils import secure_filename
from app.models import Post, db, Like
from app.forms import PostForm, EditPostForm
from app.api.aws import upload_to_aws
import datetime
import os
import boto3
from botocore.config import Config
from werkzeug.datastructures import ImmutableMultiDict

post_routes = Blueprint('posts',__name__)

def flask_form_errors(validation_errors):
    errors = []
    for inputs in validation_errors:
        for error in validation_errors[inputs]:
            errors.append(f'{inputs} fiel : {error}')
    return errors
"""
GET ALL POSTS
"""
@post_routes.route("/")
def get_all_posts():
    posts_with_likes = []
    posts = Post.query.order_by(Post.id.desc()).all()
    for post in posts:
        post_likes = Like.query.filter(Like.post_id == post.id).all()
        post_like_user_id_list = [post.user_id for post in post_likes]
        added_like=post.to_dict(post_like_user_id_list)
        posts_with_likes.append(added_like)

    return {'posts': posts_with_likes}
"""
GET INDIVIDUAL POST
"""
@post_routes.route('/<int:id>')
# @login_required
def get_single_post(id):
    post = Post.query.get(id)
    post_likes = Like.query.filter(Like.post_id == post.id).all()
    post_like_user_id_list = [post.user_id for post in post_likes]
    return post.to_dict(post_like_user_id_list)

"""
AWS CONFIGURATION
"""
AWS_ACCESS_KEY_ID= os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY= os.environ.get('AWS_SECRET_ACCESS_KEY')
BUCKET_NAME='whereaboutsbucket'
REGION_NAME = 'us-east-1'

my_config = Config(
    region_name =  REGION_NAME

)
client = boto3.client('s3', config=my_config)
s3 = boto3.resource('s3')




"""
CREATE NEW POST
"""

@post_routes.route('/new', methods=['POST'])
@login_required
def new_post():
    form = PostForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data,"<<<<<<<FORM_DATA")

    if form.validate_on_submit():
        print(form,"<<<<<<<FORM")
        print(request.method,'<<<<REQUEST')
        print(request.files,"<<<<<<<<REQUEST OBJ")
        photo = request.files['image_1']
        print(photo,"<<<<<<<<PHOTO")
        imgName = secure_filename(photo.filename)
        photo.save(imgName)
        imgUrl= upload_to_aws(imgName, BUCKET_NAME)
        print(imgUrl,"<<<<<<IMG URL")
        os.remove(imgName)
        userId = request.form['user_id']
        post_lat = request.form['post_lat']
        post_lng = request.form['post_lng']
        data = form.data

        new_post = Post(user_id=userId,
                        image_1=imgUrl,
                        # image_2="",
                        # image_3=url_dict['image_3'],
                        # image_4 = url_dict['image_4'],
                        # image_5=url_dict['image_5'],
                        post_lat=post_lat,
                        post_lng=post_lng,
                        description=data['description'],
                        created = datetime.datetime.utcnow())
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict([])

    return {"flask-errors":flask_form_errors(form.errors)},401


@post_routes.route('/aws_upload', methods=['POST'] )
#   receives files in FileStorage object on request , keys in at "picture",
#         and creates a list of all available files
def aws_upload():

    print(photo, "<<<<<PHOTO")
    print(request.files,"<<<<<<REQUEST FILES")
    if photo != "":
        #""""TRY FOR ONE UPLOAD"""
        image_1= request.files['image_1']

        base_aws_url=f"https://{BUCKET_NAME}.s3.Region.amazonaws.com/"
        image_1.save(image_1.filename)
        img_data = open(image_1.filename,'rb')
        s3.Bucket(BUCKET_NAME).put_object(Key=image_1.filename, Body=img_data)
        image_1_url = base_aws_url+f"{image_1.filename}"
        return {'image_1_url':image_1_url}
            #aws bucket url
            # base_aws_url="https://bucket-name.s3.Region.amazonaws.com/"
            # url_dict = dict()
            # for i in range(len(photos)):
            #     if photos[i] == None:
            #         pass
            #     else:

                    # photos[i].save(photos[i].filename)
                    # data = open(photos[i].filename,'rb')
                    # url_dict={f"image_{i + 1}":base_aws_url+f"{photos[i].filename}"}
                    #\ s3.Bucket(BUCKET_NAME).put_object(Key=photos[i], Body=data)


            # print(url_dict,f"<----URL_DICT")
            # image_1 = url_dict['image_1']
            # image_2 = ""
            # image_3 = ""
            # image_4 = ""
            # image_5 = ""
            # if len(photos) > 1:
            #     image_2 = url_dict['image_2']
            # if len(photos) > 2:
            #     image_3 = url_dict['image_3']
            # if len(photos) > 3:
            #     image_4 = url_dict['image_4']
            # if len(photos) > 4:
            #     image_5 = url_dict['image_5']



        # image_2= request.files['image_2']
        # image_3= request.files['image_3']
        # image_4= request.files['image_4']
        # image_5= request.files['image_5']
        # image_list = list(image_1,image_2,image_3,image_4,image_5)
        # if len(image_list) > 0:
        #     base_aws_url="https://bucket-name.s3.Region.amazonaws.com/"
        #     for i in range(len(image_list)):
        #             image_list[i].save(image_list[i].filename)
        #             img_data = open(image_list[i].filename,'rb')
        #             if len(image_list) > 1:
        #                 image_2 = url_dict['image_2']
        #             if len(image_list) > 2:
        #                 image_3 = url_dict['image_3']
        #             if len(image_list) > 3:
        #                 image_4 = url_dict['image_4']
        #             if len(image_list) > 4:
        #                 image_5 = url_dict['image_5']
        #             url_dict={f"image_{i + 1}":base_aws_url+f"{image_list[i].filename}"}
        #             s3.Bucket(BUCKET_NAME).put_object(Key=image_list[i], Body=img_data)
        # else:
        #     url

@post_routes.route('/<int:id>',methods=["PUT"])
@login_required
def edit_post(id):
    form = EditPostForm()
    post = Post.query.get(id)
    post.description = form.data['description']
    db.session.add(post)
    db.session.commit()
    return post.to_dict()

@post_routes.route('/<int:id>',methods=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return {"post_id":id}
