from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('already in use')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('already in use')


def username_length(form, field):
    # Checking if username is too long
    username = form.data['username']
    if len(username) > 40:
        raise ValidationError('too long (40 max)')


def password_confirm(form, field):
    # Checking if passwords match
    password1 = form.data['password']
    password2 = form.data['repeat_password']
    if password1 != password2:
        raise ValidationError('must match')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists, username_length])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_confirm])
    repeat_password = StringField('repeat_password', validators=[DataRequired()])
