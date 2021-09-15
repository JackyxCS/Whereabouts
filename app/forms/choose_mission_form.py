from flask_wtf import FlaskForm
from wtforms import IntegerField, DecimalField, StringField
from wtforms.validators import DataRequired
from app.models import db, User


class ChooseMissionsForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    newLat1 = DecimalField('newLat1', validators=[DataRequired()])
    newLong1 = DecimalField('newLong1', validators=[DataRequired()])