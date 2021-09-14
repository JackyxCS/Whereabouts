from flask import Blueprint, request
from flask_login import login_required
from app.models import Post, db
from app.forms import PostForm, EditPostForm
import logging
import os
import boto3
from boto3 import Session
from botocore.config import Config

post_routes = Blueprint('posts',__name__)
"""
GET ALL POSTS
"""
@post_routes.route("/")
def get_all_posts():
    posts = Post.query.all()

    return {'posts': [post.to_dict() for post in posts]}
"""
GET INDIVIDUAL POST
"""
@post_routes.route('/<int:id>')
@login_required
def get_single_post(id):
    post = Post.query.get(id)
    return post.to_dict()

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
    url_dict = dict()
    image_1=''
    form['csrf_token'].data = request.cookies['csrf_token']
        #receives files in FileStorage object on request , keys in at "picture",
        # and creates a list of all available files
        # photos = request.files.getlist("image")
        # if photos != "":
            # print(photos,f"<--- PHOTOS FROM REQUEST.FILES")
            # #aws bucket url
            # base_aws_url="https://bucket-name.s3.Region.amazonaws.com/"
            # url_dict = dict()
            # for i in range(len(photos)):
            #     if photos[i] == None:
            #         pass
            #     else:

            #         photos[i].save(photos[i].filename)
            #         data = open(photos[i].filename,'rb')
            #         url_dict={f"image_{i + 1}":base_aws_url+f"{photos[i].filename}"}
            #         s3.Bucket(BUCKET_NAME).put_object(Key=photos[i], Body=data)


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
#""""TRY FOR ONE UPLOAD"""
    image_1= request.files['image_1']
    base_aws_url="https://bucket-name.s3.Region.amazonaws.com/"
    image_1.save(image_1.filename)
    img_data = open(image_1.filename,'rb')
    s3.Bucket(BUCKET_NAME).put_object(Key=image_1, Body=img_data)
    image_1 = base_aws_url+f"{image_1.filename}"


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
    data = form.data
    new_post = Post(user_id=data['user_id'],
                    image_1=image_1,
                    # image_2="",
                    # image_3=url_dict['image_3'],
                    # image_4 = url_dict['image_4'],
                    # image_5=url_dict['image_5'],
                    post_lat=data['post_lat'],
                    post_lng=data['post_lng'],
                    description=data['description'])
    db.session.add(new_post)
    db.session.commit()
    return new_post.to_dict()


@post_routes.route('/aws_upload', methods=['POST'] )
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
