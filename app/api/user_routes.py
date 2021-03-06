from logging import log
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User
from app.forms import UpdateUserForm
from app.forms import ProfilePictureForm
from app.api.aws import upload_to_aws

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@user_routes.route('/')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=["PUT"])
@login_required
def updateUser(id):
    form = UpdateUserForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newLat = form.data["lat"]
        newLng = form.data["lng"]
        newRadius = form.data["radius"]

        user = User.query.get(id)
        user.user_lat = float(newLat)
        user.user_lng = float(newLng)
        user.user_radius = int(newRadius)

        db.session.commit()

        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

"""
AWS CONFIGURATION
"""
BUCKET_NAME='whereaboutsbucket'

@user_routes.route('/<int:userId>/photo', methods=["PUT"])
@login_required
def updateProfilePic(userId):
    form = ProfilePictureForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = request.data

    if form.validate_on_submit():


        img_set = request.files.to_dict().values()
        urls= upload_to_aws(img_set, BUCKET_NAME, userId)


        imgUrls = {index: url for index, url in enumerate(urls)}

        user = User.query.get(userId)
        user.profile_picture = imgUrls[0]

        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
