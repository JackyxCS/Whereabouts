from flask import Blueprint, request
from flask_login import login_required
from app.models import Post, db
from app.forms import PostForm
from app.forms import PostForm
import logging
import os
import boto3
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

""""""
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
def get_new_post_form():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        photos = request.files.getlist("picture")
        if photos != "":
            base_aws_url="https://bucket-name.s3.Region.amazonaws.com/"
            url_dict = dict()
            for i in range(len(photos)):

                photos[i].save(photos[i].filename)
                url_dict={f"image_{i + 1}":base_aws_url+f"{photos[i].filename}"}
                s3.Bucket(BUCKET_NAME).put_object(photos[i])

            data = form.data
            image_1 = url_dict['image_1']
            image_2 = url_dict['image_2']
            image_3 = url_dict['image_3']
            image_4 = url_dict['image_4']
            image_5 = url_dict['image_5']
            new_post = Post(user_id=data['user_id'],
                            image_1=image_1,
                            image_2=image_2,
                            image_3=image_3,
                            image_4=image_4,
                            image_5=image_5,
                            post_lat=data['post_lat'],
                            post_lng=data['post_lng'])
            db.session.add(new_post)
            db.session.commit()
    return new_post.to_dict()
