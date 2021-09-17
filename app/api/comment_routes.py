from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Mission, User, Comment, Post

comment_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# grabs all comments to to place in state, filter for a post in frontend
@comment_routes.route('/', methods=['GET'])
def getAllComments():
    comments = Comment.query.all()
    return {'comments' : [comment.to_dict() for comment in comments]}

@comment_routes.route('/', methods=["POST"])
@login_required
def postComment():
    data = request.get_json()["comment"]
    post_id = data["postId"]
    user_id = data["userId"]
    comment = data["comment"]

    new_comment = Comment(
        user_id = user_id,
        post_id = post_id,
        comment = comment,
    )

    db.session.add(new_comment)
    db.session.commit()

    return {'comment': {
        'id': new_comment.id,
        'post_id': new_comment.post_id,
        'user_id': new_comment.user_id,
        'comment': new_comment.comment,
    }}

@comment_routes.route('/<int:commentId>', methods=['PUT'])
@login_required
def updateComment(commentId):
    data = request.get_json()["comment"]

    comment = data["updatedComment"]

    single_comment = Comment.query.filter(Comment.id == commentId).all()
    print(single_comment[0].comment)
    single_comment[0].comment = comment

    db.session.commit()
    return {'single_comment': {
        'id': single_comment[0].id,
        'post_id': single_comment[0].post_id,
        'user_id': single_comment[0].user_id,
        'comment': single_comment[0].comment,
    }}

@comment_routes.route('/<int:commentId>', methods=["DELETE"])
@login_required
def deleteComment(commentId):
    delete_comment = Comment.query.filter(Comment.id == commentId).first()
    db.session.delete(delete_comment)
    db.session.commit()
    return {'deleted_comment': {
        'id': delete_comment.id,
        'post_id': delete_comment.post_id,
        'user_id': delete_comment.user_id,
        'comment': delete_comment.comment,
    }}
    