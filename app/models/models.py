from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_picture = db.Column(db.String)
    user_lat = db.Column(db.Float)
    user_lng = db.Column(db.Float)
    user_radius = db.Column(db.Integer)
    mission_details = db.relationship("Mission", back_populates="user_details", cascade="all, delete")
    like_details = db.relationship("Like", back_populates="user_details", cascade="all, delete")
    comment_details = db.relationship("Comment", back_populates="user_details", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_picture': self.profile_picture,
            'user_lat': self.user_lat,
            'user_lng': self.user_lng,
            'user_radius': self.user_radius
        }

class Mission(db.Model):
    __tablename__ = 'missions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    mission_lat = db.Column(db.Float)
    mission_lng = db.Column(db.Float)
    user_details = db.relationship("User", back_populates="mission_details")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'mission_lat': self.mission_lat,
            'mission_lng': self.mission_lng,
            'user_details': self.user_details,
        }

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    image_1 = db.Column(db.String, nullable=False)
    image_2 = db.Column(db.String)
    image_3 = db.Column(db.String)
    image_4 = db.Column(db.String)
    image_5 = db.Column(db.String)
    post_lat = db.Column(db.Float, nulllable=False)
    post_lng = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    like_count = db.Column(db.Integer, nullable=False)
    like_details = db.relationship("Like", back_populates="post_details", cascade="all, delete")
    comment_details = db.relationship("Comment", back_populates="post_details", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_1': self.image_1,
            'image_2': self.image_2,
            'image_3': self.image_3,
            'image_4': self.image_4,
            'image_5': self.image_5,
            'post_lat': self.post_lat,
            'post_lng': self.post_lng,
            'description': self.description,
            'like_count': self.like_count,
            'like_details': self.like_details,
            'comment_details': self.comment_details,
        }

class Like(db.Model):
    __tablename__ = "likes"
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    user_details = db.relationship("User", back_populates="like_details")
    post_details = db.relationship("Post", back_populates="like_details")

    def to_dict(self):
        return {
            'id': self.id,
            'post_id': self.post_id,
            'user_id': self.user_id,
            'user_details': self.user_details,
            'post_details': self.post_details
        }

class Comment(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    user_details = db.relationship("User", back_populates="comment_details")
    post_details = db.relationship("Post", back_populates="comment_details")

    def to_dict(self):
        return {
            'id': self.id,
            'post_id': self.post_id,
            'user_id': self.user_id,
            'comment': self.comment,
            'user_details': self.user_details,
            'post_details': self.post_details
        }
