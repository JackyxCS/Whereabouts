"""empty message

Revision ID: 3389be4ff2ca
Revises: ffdc0a98111c
Create Date: 2021-09-13 10:59:29.724706

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3389be4ff2ca'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('missions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('mission_lat', sa.Float(), nullable=True),
    sa.Column('mission_lng', sa.Float(), nullable=True),
    sa.Column('created', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('image_1', sa.String(), nullable=False),
    sa.Column('image_2', sa.String(), nullable=True),
    sa.Column('image_3', sa.String(), nullable=True),
    sa.Column('image_4', sa.String(), nullable=True),
    sa.Column('image_5', sa.String(), nullable=True),
    sa.Column('post_lat', sa.Float(), nullable=False),
    sa.Column('post_lng', sa.Float(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('created', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('likes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('profile_picture', sa.String(), nullable=True))
    op.add_column('users', sa.Column('user_lat', sa.Float(), nullable=True))
    op.add_column('users', sa.Column('user_lng', sa.Float(), nullable=True))
    op.add_column('users', sa.Column('user_radius', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'user_radius')
    op.drop_column('users', 'user_lng')
    op.drop_column('users', 'user_lat')
    op.drop_column('users', 'profile_picture')
    op.drop_table('likes')
    op.drop_table('comments')
    op.drop_table('posts')
    op.drop_table('missions')
    # ### end Alembic commands ###
