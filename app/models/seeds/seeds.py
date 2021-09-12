from app.models import db, User

# for your two users, add profile_picture="url", user_lat=number, user_lng-number, user_radius=miles
# go to latlong.net enter 94501 USA -> gives coords
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    fremy = User(
        username='fremy', email='fremy@aa.io', password='password')
    wembley = User(
        username='wembley', email='wembley@aa.io', password='password')
    amanda = User(
        username='amanda', email='amanda@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    jacky = User(
        username='jacky', email='jacky@aa.io', password='password')

    Users = [demo, wembley, bobbie, amanda, fremy, jacky]
    for user in Users:
        db.session.add(user)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()



    # demo user gets posts1 -posts10
#fremy gets posts11 - posts15
#wembley gets posts16 - posts21
#amanda gets posts22 - posts29
#bobbie gets posts30-posts36
#jacky gets posts37 - posts43

# amanda will count up likes and add to each post
def seed_posts():

    amanda22 = Post(
        user_id=4, image_1="url", image_2="url", image_3="url", image_4="url", image_5="url", post_lat=number, post_lng=number, description="text", like_count=number)



def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()



# fremy make 3 comments on wembley and on amanda
# amanda make 3 comments on jacky and bobbie
# jacky make 3 comments on demo and fremy

def seed_comments():
    comment1 = Comment(
        post_id=1, user_id=4, comment="text")

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()


# amanda will do the likes
def seed_likes():
    like1 = Like(
            post_id=1, user_id=4)


def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
