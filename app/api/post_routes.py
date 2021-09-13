from flask import Blueprint
from flask_login import login_required
from app.models import Post, db

post_routes = Blueprint('posts',__name__)

@post_routes.route('/<int:id>')
@login_required
def get_single_post(post_id):
    post = Post.query.get(post_id)
    return post.to_dict()

# @post_routes.route('/<int:id>')
# @login_required
# def get_single_post(post_id):
#     post = Post.query.get(post_id)
#     return post.to_dict()
