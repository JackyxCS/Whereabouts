from app.models import db, User

def seed_users():
    demo = User(
        username='Guest',
        email='demo@aa.io',
        password='password',
        profile_picture="https://di2ponv0v5otw.cloudfront.net/posts/2020/09/20/5f6826773bad6d1d4c21b86f/m_5f682683e107bbb1727114e0.jpg",
        user_lat=40.692532,
        user_lng=-73.990997,
        user_radius=25
    )
    fremy = User(
        username='Fremy',
        email='fremy@aa.io',
        password='password',
        profile_picture="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/155157747_10158480330872058_2091608857930148729_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UNIljRoawwYAX-6NeJb&_nc_ht=scontent-atl3-1.xx&oh=d7e66290459956118b7c2d42b8b3ad98&oe=6163C02A",
        user_lat=33.748997,
        user_lng=-84.387985,
        user_radius=15
    )
    wembley = User(
        username='Wembley',
        email='wembley@aa.io',
        password='password',
        profile_picture="https://images.unsplash.com/photo-1529582582744-13d8da049432?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        user_lat=40.779265,
        user_lng=-73.961951,
        user_radius=5
        )
    amanda = User(
        username='Amanda',
        email='amanda@aa.io',
        password='password',
        profile_picture="https://images.squarespace-cdn.com/content/v1/5cca34c50cf57d8e7575f84b/1632072338206-YRB64MTOOP3A0T8X09WF/AmandaHintonHeadshot.jpeg?format=1000w",
        user_lat=37.766880,
        user_lng=-122.242628,
        user_radius=10
    )
    bobbie = User(
        username='Bobbie',
        email='bobbie@aa.io',
        password='password',
        user_lat=29.780350,
        user_lng=-95.618960,
        user_radius=50
    )
    jacky = User(
        username='Jacky',
        email='jacky@aa.io',
        password='password',
        user_lat=29.891970,
        user_lng=-95.524960,
        user_radius=50
    )

    all_users = [demo, fremy, wembley, amanda, bobbie, jacky]
    for user in all_users:
        db.session.add(user)
    db.session.commit()


# raw SQL query to unseed users table (no built-in SQLAlchemy for that)
    # truncate - removes all data from table, and RESET IDENTITY
    # reset identity - resets auto incrementing primary key,
    # cascade - deletes dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
