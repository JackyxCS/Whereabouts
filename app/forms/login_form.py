from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired,  ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('address not found')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('incorrect username')
    if not user.check_password(password):
        raise ValidationError('incorrect password')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
