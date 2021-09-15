from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms.fields import DecimalField, IntegerField, TextAreaField
from wtforms.validators import DataRequired


class PostForm(FlaskForm):
    # user_id= IntegerField([DataRequired()])
    image_1= FileField("Image 1",[FileRequired(),
        #  FileAllowed(['jpg', 'png','jpeg'], 'jpg/png/jpeg Images only!')
        ])
    image_2= FileField("Image 2",[
         FileAllowed(['jpg', 'png'], 'jpg/png Images only!')
        ])
    image_3= FileField("Image 3",[
         FileAllowed(['jpg', 'png'], 'jpg/png Images only!')
        ])
    image_4= FileField("Image 4",[
         FileAllowed(['jpg', 'png'], 'jpg/png Images only!')
        ])
    image_5= FileField("Image 5",[
         FileAllowed(['jpg', 'png'], 'jpg/png Images only!')
        ])
    post_lat = DecimalField("Post Latitude",[DataRequired()])
    post_lng= DecimalField("Post Longitude",[DataRequired()])
    description= TextAreaField("Tell us about your Mission", [DataRequired()])

class EditPostForm(FlaskForm):
    description= TextAreaField("Tell us about your Mission", [DataRequired()])
