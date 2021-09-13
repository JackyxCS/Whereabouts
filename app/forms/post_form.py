from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms.fields import TextAreaField
from wtforms.validators import DataRequired


class PostForm(FlaskForm):
    image_1= FileField("Image 1",[FileRequired(),
         FileAllowed(['jpg', 'png'], 'jpg/png Images only!')
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
    description= TextAreaField("Tell us about your Mission", [DataRequired()])
