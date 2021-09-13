# from flask import Blueprint, jsonify
# from flask_login import login_required
# from app.models import Mission

# mission_routes = Blueprint('missions', __name__)

# @mission_routes.route('/', methods=['GET'])
# @login_required
# def mission(user_id):
#     missions = Mission.query.filter(User.id == user_id).all()
#     return {'mission': [missions.to_dict() for mission in missions]}

# @mission_routes.route('/', methods=['POST'])
# @login_required
# def mission(user_id):
    