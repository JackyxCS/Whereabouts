from flask_wtf import FlaskForm
from wtforms.fields.simple import FileField

class ProfilePictureForm(FlaskForm):
    profile_picture = FileField("Profile Picture")
