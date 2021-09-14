from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Mission
from app.forms import GetMissionsForm
import datetime

mission_routes = Blueprint('missions', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# @mission_routes.route('/', methods=['GET'])
# @login_required
# def mission():
#     missions = Mission.query.filter(User.id == user_id).all()
#     return {'mission': [missions.to_dict() for mission in missions]}

# posts 3 new missions
@mission_routes.route('/', methods=['POST'])
@login_required
def mission():
    form = GetMissionsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data)
    # print(form.errors)
    if form.validate_on_submit():
        # print(form.errors)
        # print(form.data)
        user_id = form.data["user_id"]
        newLat1 = form.data["newLat1"]
        newLong1 = form.data["newLong1"]
        newLat2 = form.data["newLat2"]
        newLong2 = form.data["newLong2"]
        newLat3 = form.data["newLat3"]
        newLong3 = form.data["newLong3"]

        mission1 = Mission(
            user_id = user_id,
            mission_lat = newLat1,
            mission_lng = newLong1,
            created = datetime.datetime.utcnow()
        )

        mission2 = Mission(
            user_id = user_id,
            mission_lat = newLat2,
            mission_lng = newLong2,
            created = datetime.datetime.utcnow()
        )

        mission3 = Mission(
            user_id = user_id,
            mission_lat = newLat3,
            mission_lng = newLong3,
            created = datetime.datetime.utcnow()
        )

        db.session.add(mission1)
        db.session.add(mission2)
        db.session.add(mission3)
        db.session.commit()
        return {
            mission1.id: {
                'id': mission1.id,
                'user_id': mission1.user_id,
                'mission_lat': mission1.mission_lat,
                'mission_lng': mission1.mission_lng,
            },
            mission2.id: {
                'id': mission2.id,
                'user_id': mission2.user_id,
                'mission_lat': mission2.mission_lat,
                'mission_lng': mission2.mission_lng,
            },
            mission3.id: {
                'id': mission3.id,
                'user_id': mission3.user_id,
                'mission_lat': mission3.mission_lat,
                'mission_lng': mission3.mission_lng,
            }
        }
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401