from flask_wtf import FlaskForm
from wtforms.fields.simple import FileField
from wtforms.fields import DecimalField, IntegerField, TextAreaField
from wtforms.validators import DataRequired


class PostForm(FlaskForm):
    user_id= IntegerField([DataRequired()])

    image_1= FileField("Image 1")
    image_2= FileField("Image 2")
    image_3= FileField("Image 3")
    image_4= FileField("Image 4")
    image_5= FileField("Image 5")
    post_lat = DecimalField("Post Latitude",[DataRequired()])
    post_lng= DecimalField("Post Longitude",[DataRequired()])
    description= TextAreaField("Tell us about your Mission", [DataRequired()])

class EditPostForm(FlaskForm):
    description= TextAreaField("Tell us about your Mission", [DataRequired()])
