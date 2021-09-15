from flask_wtf import FlaskForm
from wtforms import IntegerField, DecimalField, StringField
from wtforms.validators import DataRequired
from app.models import db, User


class GetMissionsForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    newLat1 = DecimalField('newLat1', validators=[DataRequired()])
    newLong1 = DecimalField('newLong1', validators=[DataRequired()])
    newLat2 = DecimalField('newLat2', validators=[DataRequired()])
    newLong2 = DecimalField('newLong2', validators=[DataRequired()])
    newLat3 = DecimalField('newLat3', validators=[DataRequired()])
    newLong3 = DecimalField('newLong3', validators=[DataRequired()])
