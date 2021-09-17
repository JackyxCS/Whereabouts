from flask import Blueprint,request
from flask_login import login_required

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
    # print(form.data,"<<<<<<<FORM_DATA")

    if form.validate_on_submit():
        img_set = request.files.to_dict().values()

      

        userId = request.form['user_id']
        urls= upload_to_aws(img_set, BUCKET_NAME, userId)

        imgUrls = {index: url for index, url in enumerate(urls)}



        image_2= None
        image_3= None
        image_4= None
        image_5= None
        if len(urls) > 1:
            image_2 = imgUrls[1]
        if len(urls) > 2:
            image_2 = imgUrls[1]
            image_3= imgUrls[2]
        if len(urls) >3:
            image_2 = imgUrls[1]
            image_3= imgUrls[2]
            image_4 = imgUrls[3]
        if len(urls) >= 5:
            image_2 = imgUrls[1]
            image_3= imgUrls[2]
            image_4 = imgUrls[3]
            image_5 = imgUrls[4]


        post_lat = request.form['post_lat']
        post_lng = request.form['post_lng']
        data = form.data

        new_post = Post(user_id=userId,
                        image_1=imgUrls[0],
                        image_2=image_2,
                        image_3= image_3,
                        image_4 = image_4,
                        image_5= image_5,
                        post_lat=post_lat,
                        post_lng=post_lng,
                        description=data['description'],
                        created = datetime.datetime.utcnow())
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict([])

    return {"flask-errors":flask_form_errors(form.errors)},401

"""
EDIT POST DESCRIPTION
"""
@post_routes.route('/<int:id>',methods=["PUT"])
@login_required
def edit_post(id):
    form = EditPostForm()
    post = Post.query.get(id)

    post_likes = Like.query.filter(Like.post_id == post.id).all()
    post_like_user_id_list = [post.user_id for post in post_likes]


    post.description = request.form['description']

    db.session.add(post)
    db.session.commit()
    return post.to_dict(post_like_user_id_list)

"""
DELETE POST
"""

@post_routes.route('/<int:id>',methods=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return {"post_id":id}
