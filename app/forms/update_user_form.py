from flask_wtf import FlaskForm
from wtforms import IntegerField, DecimalField, StringField
from wtforms.validators import DataRequired
from app.models import db, User

class UpdateUserForm(FlaskForm):
    # user_id = IntegerField('user_id', validators=[DataRequired()])
    lat = DecimalField('lat', validators=[DataRequired()])
    lng = DecimalField('lng', validators=[DataRequired()])
    radius = IntegerField('radius', validators=[DataRequired()])
