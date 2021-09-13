from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        post_id=16,
        user_id=1,
        comment="Wow! this looks really interesting! You should check out some of my posts. I went on a similar mission recently. Keep posting great stuff! ❤️"
    )
    comment2 = Comment(
        post_id=17,
        user_id=1,
        comment="Hmmm, do you mind explaining more about 3rd picture?"
    )
    comment3 = Comment(
        post_id=21,
        user_id=1,
        comment="OMG THAT'S AWESOME!!! Would not have thought you could find such cool places on this site!?"
    )
    comment4 = Comment(
        post_id=10,
        user_id=2,
        comment="Girl, that shit look scary!! RUN!!!"
    )
    comment5 = Comment(
        post_id=9,
        user_id=2,
        comment="Oooo I went here with my ex once!"
    )
    comment6 = Comment(
        post_id=22,
        user_id=2,
        comment="The picture is kinda blurry."
    )
    comment7 = Comment(
        post_id=30,
        user_id=3,
        comment="I hope my next location is like this! I always moo at them when I drive by!"
    )
    comment8 = Comment(
        post_id=37,
        user_id=3,
        comment="I can't even ???"
    )
    comment9 = Comment(
        post_id=43,
        user_id=4,
        comment="Beautiful! 🌸 I got sent to some poppy fields once and all the flowers were amazing!"
    )
    comment10 = Comment(
        post_id=33,
        user_id=4,
        comment="Yum! Now I'm hungry!"
    )
    comment11 = Comment(
        post_id=39,
        user_id=4,
        comment="I'm so jealous! I picture something like this when I have anxiety. I need to go NOW, lol!"
    )
    comment12 = Comment(
        post_id=37,
        user_id=3,
        comment="😍 Looks like a gorgeous hike!"
    )
    comment13 = Comment(
        post_id=1,
        user_id=5,
        comment="Cool!"
    )
    comment14 = Comment(
        post_id=2,
        user_id=5,
        comment="I'm always surprised by the places you can find on here."
    )
    comment15 = Comment(
        post_id=6,
        user_id=5,
        comment="What an amazing find!"
    )
    comment16 = Comment(
        post_id=13,
        user_id=6,
        comment="I love this!"
    )
    comment17 = Comment(
        post_id=11,
        user_id=6,
        comment="Looks cool!"
    )
    comment18 = Comment(
        post_id=15,
        user_id=6,
        comment="I wanna know too!"
    )
    comment19 = Comment(
        post_id=1,
        user_id=2,
        comment="What did you find?!"
    )
    comment20 = Comment(
        post_id=1,
        user_id=3,
        comment="Welcome to the club 😉"
    )
    comment21 = Comment(
        post_id=1,
        user_id=4,
        comment="Lush! Did you go into the trees?"
    )
    comment22 = Comment(
        post_id=1,
        user_id=6,
        comment="I want to hear more about your rando-trek!"
    )
    comment23 = Comment(
        post_id=2,
        user_id=3,
        comment="Super creepy."
    )
    comment24 = Comment(
        post_id=2,
        user_id=5,
        comment="Nope."
    )
    comment25 = Comment(
        post_id=3,
        user_id=2,
        comment="Love that - great pics!"
    )
    comment26 = Comment(
        post_id=3,
        user_id=3,
        comment="Colorful!"
    )
    comment27 = Comment(
        post_id=3,
        user_id=4,
        comment="Did you bring your paint cans?"
    )
    comment28 = Comment(
        post_id=4,
        user_id=5,
        comment="No way I would go past that razor wire"
    )
    comment29 = Comment(
        post_id=4,
        user_id=6,
        comment="Glad you stayed safe and met someone cool!"
    )
    comment30 = Comment(
        post_id=4,
        user_id=2,
        comment="I'd like to hear more about what Eldraih had to say"
    )
    comment31 = Comment(
        post_id=5,
        user_id=6,
        comment="I used to get so many late fees"
    )
    comment32 = Comment(
        post_id=5,
        user_id=4,
        comment="I remember OC USTER IDEO!"
    )
    comment33 = Comment(
        post_id=6,
        user_id=3,
        comment="So cool that you did some metal detecting on your expedition!"
    )
    comment34 = Comment(
        post_id=6,
        user_id=5,
        comment="What are you going to do with your finds? Are they worth money? 🤑"
    )
    comment35 = Comment(
        post_id=6,
        user_id=2,
        comment="That's an awesome way to bond with your dad!"
    )
    comment36 = Comment(
        post_id=7,
        user_id=4,
        comment="Ugh, dolls give me the chills. My mom collected them and they terrified me. No thanls. Cutie doggo, though!"
    )
    comment37 = Comment(
        post_id=7,
        user_id=5,
        comment="I'm taking my dog with my on my next location!"
    )
    comment38 = Comment(
        post_id=7,
        user_id=6,
        comment="Is that a deatheater mask?!"
    )
    comment39 = Comment(
        post_id=7,
        user_id=3,
        comment="What were those mismatched shoes doing there?"
    )
    comment40 = Comment(
        post_id=8,
        user_id=3,
        comment="Yeah. I've had a few duds, but I usually keep wandering around til I find something unusual."
    )
    comment41 = Comment(
        post_id=9,
        user_id=2,
        comment="Def! Mood really influences my experiences on these missions."
    )
    comment42 = Comment(
        post_id=9,
        user_id=4,
        comment="Kick-kick! I want to get something like this - so fun!"
    )
    comment43 = Comment(
        post_id=10,
        user_id=6,
        comment="Reminds me of the movie IT 🎈"
    )
    comment44 = Comment(
        post_id=10,
        user_id=5,
        comment="😳 You are brave - can't believe you went in there!"
    )
    comment45 = Comment(
        post_id=10,
        user_id=3,
        comment="Noooo, come back! I love checking out your posts!!!"
    )

    all_comments = [comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8, comment9, comment10, comment11, comment12, comment13, comment14, comment15, comment16, comment17, comment18, comment19, comment20, comment21, comment22, comment23, comment24, comment25, comment26, comment27, comment28, comment29, comment30, comment31, comment32, comment33, comment34, comment35, comment36, comment37, comment38, comment39, comment40, comment41, comment42, comment43, comment44, comment45]
    for comment in all_comments:
        db.session.add(comment)
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
