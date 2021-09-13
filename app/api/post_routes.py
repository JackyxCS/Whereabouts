from flask import Blueprint
from flask_login import login_required
from app.models import Post, db

posts = Blueprint('posts',__name__)

@posts.route('/<int:id>')
@login_required
def get_single_post(post_id):
    post = Post.query.get(post_id)
    return post.to_dict()
