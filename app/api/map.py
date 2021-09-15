# from flask import Blueprint, jsonify, request
# from flask_login import login_required, current_user
# from app.models import db, Mission, User
# from app.forms import GetMissionsForm, ChooseMissionsForm
# import datetime
# from app.config import Config

# maps_routes = Blueprint('maps', __name__)

# def validation_errors_to_error_messages(validation_errors):
#     """
#     Simple function that turns the WTForms validation errors into a simple list
#     """
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages

# @maps_routes.route('/', methods=['POST'])
# def getMap():
    
