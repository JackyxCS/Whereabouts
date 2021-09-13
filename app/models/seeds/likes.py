from app.models import db, Like

def construct_likes(posts, likers):
    pairs = []
    for post in posts:
        for liker in likers:
            pairs.append((post, liker))

    res = []
    for (post, user) in pairs:
        like = Like(
            post_id=post,
            user_id=user
        )
        res.append(like)
    return res


def seed_likes():
    d1 = Like(
        post_id=1,
        user_id=2,
    )
    d2 = Like(
        post_id=1,
        user_id=3,
    )
    d3 = Like(
        post_id=1,
        user_id=4,
    )
    d4 = Like(
        post_id=1,
        user_id=5,
    )
    d5 = Like(
        post_id=2,
        user_id=6,
    )
    d6 = Like(
        post_id=2,
        user_id=2,
    )
    d7 = Like(
        post_id=2,
        user_id=3,
    )
    d8 = Like(
        post_id=3,
        user_id=4,
    )
    d9 = Like(
        post_id=3,
        user_id=5,
    )
    d10 = Like(
        post_id=4,
        user_id=6,
    )
    d11 = Like(
        post_id=4,
        user_id=2,
    )
    d12 = Like(
        post_id=4,
        user_id=3,
    )
    d13 = Like(
        post_id=5,
        user_id=4,
    )
    d14 = Like(
        post_id=5,
        user_id=5,
    )
    d15 = Like(
        post_id=5,
        user_id=6,
    )
    d16 = Like(
        post_id=5,
        user_id=2,
    )
    d17 = Like(
        post_id=6,
        user_id=3,
    )
    d18 = Like(
        post_id=6,
        user_id=4,
    )
    d19 = Like(
        post_id=7,
        user_id=5,
    )
    d20 = Like(
        post_id=8,
        user_id=6,
    )
    d21 = Like(
        post_id=8,
        user_id=2,
    )
    d22 = Like(
        post_id=8,
        user_id=3,
    )
    d23 = Like(
        post_id=8,
        user_id=4,
    )
    d24 = Like(
        post_id=8,
        user_id=5,
    )
    d25 = Like(
        post_id=9,
        user_id=6,
    )
    d26 = Like(
        post_id=9,
        user_id=2,
    )
    d27 = Like(
        post_id=10,
        user_id=3,
    )
    d28 = Like(
        post_id=10,
        user_id=4,
    )
    d29 = Like(
        post_id=10,
        user_id=5,
    )

    people_likes = []

    fremyposts = [11, 12, 13, 14, 15]
    fremylikers = [1, 4, 5]
    people_likes = people_likes + construct_likes(fremyposts, fremylikers)

    wembleyposts = [16, 17, 18, 19, 20, 21]
    wembleylikers = [4, 5 ]
    people_likes = people_likes + construct_likes(wembleyposts, wembleylikers)

    amandaposts = [22, 23, 24, 25, 26, 27, 28, 29]
    amandalikers = [1, 2, 6]
    people_likes = people_likes + construct_likes(amandaposts, amandalikers)

    bobbieposts = [30, 31, 32, 33, 34, 35, 36]
    bobbielikers = [3, 6]
    people_likes = people_likes + construct_likes(bobbieposts, bobbielikers)

    jackyposts = [37, 38, 39, 40, 41, 42, 43]
    jackylikers = [1, 2, 4]
    people_likes = people_likes + construct_likes(jackyposts, jackylikers)

    # people_likes is a list of likes...
    # people_likes = [
    #              Like(post_id=11, user_id=1),
    #              Like(post_id=11, user_id=1),
    #              Like(post_id=11, user_id=1),
    #              ETC...
    #              ]

    demo_likes = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29]

    all_likes = demo_likes + people_likes
    for like in all_likes:
        db.session.add(like)
    db.session.commit()


def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
