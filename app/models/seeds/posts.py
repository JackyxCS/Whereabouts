from app.models import db, Post

def seed_posts():
    demo1 =Post(
        user_id=1,
        image_1="https://i.redd.it/xxepiu382g951.jpg",
        image_2="https://i.redd.it/3kt589cg05951.jpg",
        image_3="https://img.buzzfeed.com/buzzfeed-static/static/2020-06/30/23/asset/26d5c8999ab5/sub-buzz-8093-1593560895-28.jpg?resize=625:833",
        post_lat=40.653449,
        post_lng=-73.853692,
        description="This was my first rando-trek! rando-walk? idk what to call it but I found some cool and weird things on my walk. Took the red southbound train to Queens."
    )
    demo2=Post(
        user_id=1,
        image_1="https://i.imgur.com/FWHvyKF.jpg",
        post_lat=40.707450,
        post_lng=-74.093122,
        description="My friend and I went to this abandonded warehouse. Don't ask us why, but we decided to go in the middle of the night. It was really creepy and we felt like we were being watched... probably wont go out this late again. Was only able to take one photo."
    )
    demo3=Post(
        user_id=1,
        image_1="https://i.redd.it/dlisyjw4i2n71.jpg",
        image_2="https://uncoveringpa.com/wp-content/uploads/2019/07/Scotia-2029.jpg",
        image_3="http://4.bp.blogspot.com/-OrXqY4cPaYE/VXhwE8BMIlI/AAAAAAAAArA/Y1W9dDow7eE/s1600/DSCF3517.JPG",
        image_4="https://uncoveringpa.com/wp-content/uploads/2019/07/Scotia-2036.jpg",
        post_lat=40.078071,
        post_lng=-74.399003,
        description="Went to go visit a friend in Jersey and wanted to explore. We got sent to this super cool woodsy area where we saw these forgotten stone buildings that had all this beautiful graffiti on them."
    )
    demo4=Post(
        user_id=1,
        image_1="https://i.ytimg.com/vi/9PSg30XfH0s/maxresdefault.jpg",
        image_2="https://saportakinsta.s3.amazonaws.com/wp-content/uploads/2018/02/zero-mile-post.jpg",
        post_lat=40.905812,
        post_lng=-73.852145,
        description="I'm really beginning to like this app! I was sent to this sort of sketch area, but I kept my wits about me and my intentions clear (and my pepper spray close). The coordinates took me near some train tracks and I decided to see what and who was under there. I actually ended up talking to a really sweet unhoused lady named Eldraih who ended up telling me how the city has change within the last thirty years. What an enriching experience!"
    )
    demo5=Post(
        user_id=1,
        image_1="https://preview.redd.it/aj3zv9v0aym71.jpg?width=640&crop=smart&auto=webp&s=518eaf935f66f59ea55b955a54a4cab747731860",
        post_lat=40.632997,
        post_lng=-73.929053,
        description="Flash from the past!!! This took us to an empty parking lot, but look at this almost ancient Blockbuster sign! Didn't really find much else."
    )
    demo6=Post(
        user_id=1,
        image_1="https://steemitimages.com/p/FxX5caie56yqUbvo2DTJv1i6qm8z4ixTabBTrjodAxvnU3ZLiCPFaYRgJ527Zvtww1VCCWERXrdE1JUQsNBzAMFcfhQuBZHZsiPYKDgBFLGe?format=match&mode=fit&width=1280",
        image_2="https://steemitimages.com/DQmU1vexkPNd7TrSHcy46M6U6AVFbFtzzWp9CauVBq9EQ6U/33.jpg",
        image_3="https://steemitimages.com/p/2923mN3pnd7PrxqAS8My84z8QnDpEsSBnKFsBYXvo94NNLva9x9yGKDnfrthbbunoMTKhKLiv9qNLnB3t42iBMcScCvBCS5qiT37rVjGh5nGdU?format=match&mode=fit&width=1280",
        image_4="https://steemitimages.com/DQmZe7evpSvkfvBiFEovzwquLEk6cnh8eJoPXLv1PjHfYFv/26.jpg",
        image_5="https://steemitimages.com/p/2923mN3pnd7PrxqAS8My84z8QnDpEsSBnKFsBYXvoCN1ZmVsm3DLRdnyo9Dz8Cvqjj9hxamWuj2N7B5fYf2qPjn8YgmxpGJsKZfpc1Ui5t74Rk?format=match&mode=fit&width=1280",
        post_lat=41.481391,
        post_lng=-72.686613,
        description="Went back home to see family in Connecticut and was excited to hear my father express interest in going on an expidition with me. My father has been an avid explorer of sorts all of his life. Whether it was storage unit finds or going to auctions, he was into it! Today we brought his metal detector on a misssion with us and found what appeared to be a lot of WWII military equipment! What a great way to spend the day."
    )
    demo7=Post(
        user_id=1,
        image_1="https://nancybird375.files.wordpress.com/2020/05/img_3073.jpg",
        image_2="https://pbs.twimg.com/media/C11mB6oUoAAqn5n.jpg",
        image_3="https://www.boredpanda.com/blog/wp-content/uploads/2019/06/interesting-forest-finds-116-5d0b7d9d2c7f1__700.jpg",
        image_4="https://www.maxpixel.net/static/photo/1x/Cute-Pet-Dog-Walk-Animal-Forest-Adorable-4863168.jpg",
        post_lat=40.577812,
        post_lng=-74.150342,
        description="Just some Staten Island find, took me to this trail near a park that had a lot of random things on it. Nice stroll for me and my dog though."
    )
    demo8=Post(
        user_id=1,
        image_1="https://dralegal.org/wp-content/uploads/2019/07/2019-NY-Sidewalks.jpg",
        post_lat=40.762896,
        post_lng=-74.100140,
        description="Wasnt really anything here! I guess ALL the missions can't ALWAYS be amazing. Was also in kind of a blah mood, so that may have added to it."
    )
    demo9=Post(
        user_id=1,
        image_1="https://cdn.newsday.com/polopoly_fs/1.50134407.1612124769!/httpImage/image.jpg_gen/derivatives/landscape_1280/image.jpg",
        image_2="https://preview.redd.it/uu7qbv5nutm71.jpg?width=640&crop=smart&auto=webp&s=379e3964a86b4d1bd5b5e896ccaec2cdda0c6352",
        image_3="https://cherisundra.files.wordpress.com/2017/06/golf-11.jpg",
        post_lat=40.822392,
        post_lng=-74.370663,
        description="OMG!!!! This has to be my coolest find yet! I believe my energy effected the find of my last mission. So today I decided to spend time meditating and thinking about good intentions before heading out. I also invited a few friends to increase the energy. We decided to go an hour out of Brooklyn and found an abandoned mini-golf course!! It was so cool! We found some stones and played kick-kick (our version of putt-putt) lol."
    )
    demo10=Post(
        user_id=1,
        image_1="https://preview.redd.it/sug9nm17dom71.jpg?width=960&crop=smart&auto=webp&s=e0d75a50e7b471dcfa032473323aa60309e3a73f",
        image_2="url",
        image_3="url",
        image_4="url",
        image_5="url",
        post_lat=40.658797,
        post_lng=-74.215221,
        description="This mission was as scary as the time I went to that abandoned warehouse with my friend in the middle of the night. Already ready, I logged in, got my mission, and went off. I thought it was another dead end because all I saw were trees. However, after 25 minutes of mindless walking, I saw  what seemed to be a tunnel in the middle in the forest, for god knows why. Anyway, something told me to stay back, but I decided that if I was already out here, I was going to make the most of my trip. I went in and turned on my phone flashlight to help with the light. I kept walking in and the echo sounded as if the tunnel was endless. I noticed that my phone was dying at a pretty alarming rate, so my truck couldn’t be too long. I decided to look on the floor, where I saw countless things of people using the space momentarily. Broken bottles, condoms, syringes... Then I saw markings on the wall along with candles and a pool of what looked like blood. As I attempted to take a picture, my phone completely died. I was only able to get a picture of the outside of the tunnel. I ran out of there immediately. That place gave me chills. Probably going to take a break from missions for a while..."
    )
    fremy11= Post(
        user_id=2,
        image_1="https://preview.redd.it/j52d8uv4fom71.jpg?width=640&crop=smart&auto=webp&s=8e4c50c4edf2dfbff55431a83fefeef43d827a18",
        post_lat=33.752319,
        post_lng=-84.418902,
        description="This was my first mission. I went to this wooded area that ended up having a little creek behind it. Wasn't really anything noteworthy to snap a photo of, though I saw this weird barbed construction."
    )
    fremy12= Post(
        user_id=2,
        image_1="https://www.gannett-cdn.com/presto/2019/10/21/PDTF/1d564a8e-d1df-43bf-bc3c-6c1010933734-Vacancy_2.jpg",
        image_2="https://www.toledoblade.com/image/2020/07/27/1140x_a10-7_cTC/CTY-BLUFF28-1.jpeg",
        post_lat=33.795697,
        post_lng=-84.331639,
        description="just a vacant lot, lol hoping to find something cool next time"
    )
    fremy13= Post(
        user_id=2,
        image_1="https://photos.thedyrt.com/photo/639586/media/georgia-cooper-creek-recreation-area_60f24dd3-335b-4515-a1b9-6289638042e1.jpeg?ixlib=rb-3.1.1&auto=webp",
        image_2="https://bilingualandmore.files.wordpress.com/2006/10/173_7316.JPG",
        image_3="https://flyfishingswva.files.wordpress.com/2019/10/f882f85e-bb59-4058-ad3d-b20947642588.jpg?w=1024",
        post_lat=33.717486,
        post_lng=-84.344434,
        description="Okay this was actually so peaceful! I saw this was near a nature reserve a friend of mine had been to, so I prepared for a hike. There was a gorgeous babbling creek with loads of wildlife buzzing around. SO GLAD I went! lol I was beginning to lose faith in this site."
    )
    fremy14= Post(
        user_id=2,
        image_1="https://saportakinsta.s3.amazonaws.com/wp-content/uploads/2018/02/gulch-2-KJ.jpg",
        image_2="https://saportakinsta.s3.amazonaws.com/wp-content/uploads/2018/02/gulch-3-KJ.jpg",
        image_3="https://saportakinsta.s3.amazonaws.com/wp-content/uploads/2018/02/zero-mile-post-2.jpg",
        post_lat=33.711793,
        post_lng=-84.393345,
        description="This brought me by the Mercedez Benz Stadium where the Georgia Dome used to be. It was kind of cool and sad to think about what had been here before hand. I love the culture of Atlanta."
    )
    fremy15= Post(
        user_id=2, image_1="https://i.imgur.com/lLZhoYS.jpeg",
        image_2="https://m.media-amazon.com/images/M/MV5BZmQ2Y2E2Y2EtN2QxOC00OWU0LTk1ZDYtY2JhZWQ2NDExYjY0XkEyXkFqcGdeQXVyMTEzNzczMA@@._V1_.jpg",
        image_3="https://m.media-amazon.com/images/M/MV5BMzQzOTBhYzItOWZhZC00ZjFiLWI4OGMtMzNjZTUzODJiNzdlXkEyXkFqcGdeQXVyMTEzNzczMA@@._V1_.jpg",
        post_lat=33.799424,
        post_lng=-84.428387,
        description="Okay so this was kinda creepy, I scoped the place out on google maps before going, and when I saw it was kind of in the middle of no where I called my homegirl to come with me. We walked for like 5 minutes and came up on this old abandonded house that was pretty intact. Some rooms still had some furniture and pictures. It was really weird, as if whoever stayed here before vanished in a flash. Would love to know what the story was here."
    )
    wembley16 = Post(
        user_id=3,
        image_1="https://images.unsplash.com/photo-1605617697069-959ec9dfc9de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2019&q=80",
        image_2="https://images.unsplash.com/photo-1583960222460-fc1428b59250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80",
        image_3="https://images.unsplash.com/photo-1601385205545-a00be9982721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
        post_lat=40.758067,
        post_lng=-73.985693,
        description="Yep, Times Square."
    )
    wembley17 = Post(
        user_id=3,
        image_1="https://images.unsplash.com/photo-1514134583630-250e42c36dbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
        image_2="https://images.unsplash.com/photo-1482941852327-72b6c614e4fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=674&q=80",
        image_3="https://images.unsplash.com/photo-1535246785412-526b774dd1ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        image_4="https://images.unsplash.com/photo-1534432295314-d934309ea09d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1651&q=80",
        image_5="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80",
        post_lat=40.759783,
        post_lng=-73.970019,
        description="Thought I'd let Whereabouts choose where I worked today. This was the closest cafe, and I enjoyed a little latte art before I began writing."
    )
    wembley18 = Post(
        user_id=3,
        image_1="https://images.unsplash.com/photo-1561756195-d77f7d163734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        image_2="https://images.unsplash.com/photo-1576164409874-dd7838ee8908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        image_3="https://images.unsplash.com/photo-1524202503253-d461ec0ece86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        image_4="https://images.unsplash.com/photo-1625103805230-b65d25cacf58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        image_5="https://images.unsplash.com/photo-1611699810993-0478567da606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        post_lat=40.753147,
        post_lng=-73.981511,
        description="Is there any better place on earth than the NY Public Library?! It's been months - every time I come here, I wonder why it has been so long. Promising myself that I will do as much research here as I do online."
    )
    wembley19 = Post(
        user_id=3,
        image_1="https://images.unsplash.com/photo-1549650723-65cef979ad35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        image_2="https://images.unsplash.com/photo-1518218392262-1beb4730fb09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        image_3="https://images.unsplash.com/photo-1508194352611-6b07fe490feb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        post_lat=40.741427,
        post_lng=-73.989109,
        description="Closest point of interest: the Flatiron Building. Close up and from a distance. There's a reason it's an icon."
    )
    wembley20 = Post(
        user_id=3,
        image_1="https://images.unsplash.com/photo-1617141303889-4c7494183e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_2="https://images.unsplash.com/photo-1590968927184-89650e47708c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80",
        post_lat=40.747910,
        post_lng=-73.985022,
        description="Since this intersection was practically there, it would be a shame to not share a pic of the Empire State Building too. :)"
    )
    wembley21 = Post(
        user_id=3,
        image_1="https://images.unsplash.com/photo-1522092372459-dff01028d904?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        image_2="https://images.unsplash.com/photo-1541418702548-c057059ead56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        image_3="https://images.unsplash.com/photo-1550908415-342cf8c7729e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=957&q=80",
        post_lat=40.704410,
        post_lng=-73.998581,
        description="Brooklyn Bridge. Hoping that I get to collect all the bridges eventually."
    )
    amanda22 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1575004888570-667789179bd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        image_2="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        post_lat=32.078330,
        post_lng=-81.089270,
        description="A little random side trip while we were visiting Savannah and Tybee led us to this cute ice cream shop. 🍦 Enjoyed a strawberry cone while I walked around."
    )
    amanda23 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1527314392553-2c7bded21b23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        image_2="https://images.unsplash.com/photo-1581498415311-b37f3fe64cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_3="https://images.unsplash.com/photo-1581498415350-75189c2bd22b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        image_4="https://images.unsplash.com/photo-1623221500727-3cf679cd7307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        image_5="https://images.unsplash.com/photo-1577377717083-cb7d457d7173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        post_lat=37.793838,
        post_lng=-122.291911,
        description="Coordinates were in the middle of the water so we hopped on the Oakland-to-SF ferry and took a round trip with dinner between. Watched the containerships being unloaded at the port and then got to see it all lit up on the return in the evening."
    )
    amanda24 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1505303635894-5b046745d489?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        post_lat=37.773752,
        post_lng=-122.276379,
        description="Today's mission was in the middle of a pinball museum! We were so thrilled that I forgot to take photos, but I'll definitely be going back."
    )
    amanda25 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1572081607120-6fd4ee848f75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_2="https://images.unsplash.com/photo-1562008252-793937e6488f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        image_3="https://images.unsplash.com/photo-1593022910074-3db767d47f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        image_4="https://images.unsplash.com/photo-1597626697193-f4c4f08b8cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        image_5="https://images.unsplash.com/photo-1572081608077-1af152703136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        post_lat=37.791177,
        post_lng=-122.405329,
        description="Through the dragon gate and into Chinatown. Went to the home of the fortune cookie and browsed the shops. So vibrant and fun."
    )
    amanda26 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1559720550-7117b22f8744?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_2="https://images.unsplash.com/photo-1596756947832-9699d8524480?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_3="https://images.unsplash.com/photo-1527311257265-eb6c944f8c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        post_lat=37.678480,
        post_lng=-122.452733,
        description="This location was in the middle of some car lots and cemetaries. After looking online, we found out this little town, Colma, has more dead people than alive ones since San Francisco buries its bodies here. It's called The City of the Silent. Joe DiMaggio and Wyatt Earp are buried here. Kinda creepy kinda cool!"
    )
    amanda27 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1524168334318-be49fa56b021?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_2="https://images.unsplash.com/photo-1555656034-6b09561018c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_3="https://images.unsplash.com/photo-1553025298-63c30880c9df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        image_4="https://images.unsplash.com/photo-1589837444883-79bfae57c7e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1029&q=80",
        image_5="https://images.unsplash.com/photo-1541878578057-63a626f9ed7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1675&q=80",
        post_lat=34.726018,
        post_lng=-118.398052,
        description="Changed up our location to go on an adventure during our recent trip to LA. Ended up at Antelope Valley Poppy Reserve. We have to come back next year at peak bloom."
    )
    amanda28 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1550573079-b12f15bbfc8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        post_lat=37.715549,
        post_lng=-122.188111,
        description="Arrived in the middle of nowhere and was disappointed at first. We wandered around chatting for half an hour and then the sun started to set and the sky looked like fire."
    )
    amanda29 = Post(
        user_id=4,
        image_1="https://images.unsplash.com/photo-1600788845807-02e9ecabb1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        image_2="https://images.unsplash.com/photo-1614568039233-8d93505aced0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        image_3="https://images.unsplash.com/photo-1600788846591-aed288c69625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        post_lat=37.803555,
        post_lng=-122.261014,
        description="Took us about an hour to walk all the way around Lake Merritt. Watched the people and the birds all enjoying themselves on this sunny day."
    )
    bobbie30 = Post(
        user_id=5, image_1="https://images.unsplash.com/photo-1454179083322-198bb4daae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_2="https://images.unsplash.com/9/fields.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80",
        image_3="https://images.unsplash.com/photo-1498191923457-88552caeccb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_4="https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=665&q=80",
        image_5="https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        post_lat=30.092150,
        post_lng=-96.060850,
        description="We found such a cute farm!"
    )
    bobbie31 = Post(
        user_id=5,
        image_1="https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        image_2="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        image_3="https://images.unsplash.com/photo-1534235826754-0a3572d1d6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        image_4="https://images.unsplash.com/photo-1575223970966-76ae61ee7838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_5="https://images.unsplash.com/photo-1593548615306-d1db319843b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        post_lat=29.726400,
        post_lng=-95.391460,
        description="I'm a creative and I can't believe I actually stumbled into an art museum I've been meaning to visit"
    )
    bobbie32 = Post(
        user_id=5,
        image_1="https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        image_2="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_3="https://images.unsplash.com/photo-1573155993874-d5d48af862ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        image_4="https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_5="https://images.unsplash.com/photo-1561283890-5d858c23b2ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=969&q=80",
        post_lat=29.824550,
        post_lng=-95.615510,
        description="Decided to go on an adventure with the kids and the site brought us to this beautiful park."
    )
    bobbie33 = Post(
        user_id=5,
        image_1="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        image_2="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_3="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_4="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        image_5="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        post_lat=29.742610,
        post_lng=-95.453090,
        description="We were led to a fancy restuarant so we decided to try it out! Everything was amazing!"
    )
    bobbie34 = Post(
        user_id=5,
        image_1="https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        image_2="https://images.unsplash.com/photo-1614969263964-f381e32b337d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        image_3="https://images.unsplash.com/photo-1602595366984-709ba7028122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
        image_4="https://images.unsplash.com/photo-1614695639449-b305bfe37142?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        image_5="https://images.unsplash.com/photo-1612819052787-618023ea329f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        post_lat=29.736750,
        post_lng=-95.570183,
        description="Brought us to a Whole Foods so we went shopping and cooking after. What a fun night!"
    )
    bobbie35 = Post(
        user_id=5,
        image_1="https://images.unsplash.com/photo-1591285713698-598d587de63e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        image_2="https://images.unsplash.com/photo-1498747946579-bde604cb8f44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        image_3="https://images.unsplash.com/photo-1566230555350-59683b1d16e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        image_4="https://images.unsplash.com/photo-1551672746-89991811c186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80",
        image_5="https://images.unsplash.com/photo-1556314231-2f7d9c122691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
        post_lat=29.776530,
        post_lng=-95.613370,
        description="A great local pool - too bad I hate swimming but I didn't even know this place existed so close to me."
    )
    bobbie36 = Post(
        user_id=5,
        image_1="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        image_2="https://images.unsplash.com/photo-1563302905-4830598613c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMGNvdXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        image_3="https://images.unsplash.com/photo-1599677104038-58d80f6976e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhc2tldGJhbGwlMjBjb3VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        image_4="https://images.unsplash.com/photo-1612854775728-ec72f2999bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
        image_5="https://images.unsplash.com/photo-1598812587400-9d260b1ad81a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        post_lat=29.714230,
        post_lng=-95.600560,
        description="Found a neighborhood basket court!"
    )
    jacky37 = Post(
        user_id=6,
        image_1="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        image_2="https://images.unsplash.com/photo-1525474089639-b5fff4440315?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80",
        image_3="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        image_4="https://images.unsplash.com/photo-1503093928907-326ec3f06115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_5="https://images.unsplash.com/photo-1536607961765-592e80bcc19e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        post_lat=29.782310,
        post_lng=-95.621918,
        description="Wow, we would've never found this beautiful hike without this site."
    )
    jacky38 = Post(
        user_id=6,
        image_1="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        image_2="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1058&q=80",
        image_3="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_4="https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80",
        image_5="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        post_lat=29.779380,
        post_lng=-95.560560,
        description="Led us to the movie theaters on a perfect night for a relaxing movie."
    )
    jacky39 = Post(
        user_id=6,
        image_1="https://images.unsplash.com/photo-1506536329413-d2f0d31ceb9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        image_2="https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        image_3="https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
        image_4="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_5="https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        post_lat=30.388262,
        post_lng=-95.696335,
        description="Beautiful day to get out onto the lake. Thanks Whereabouts for the coords!"
    )
    jacky40 = Post(
        user_id=6,
        image_1="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        image_2="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        image_3="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        image_4="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_5="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80",
        post_lat=29.763450,
        post_lng=-95.624770,
        description="A local coffee shop with friendly baristas and the best chai latte on the planet."
    )
    jacky41 = Post(
        user_id=6,
        image_1="https://images.unsplash.com/photo-1602425165569-98a2ea215e6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2slMjBhbGxleXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        image_2="https://images.unsplash.com/photo-1614518921450-1d5431a02324?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2slMjBhbGxleXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        image_3="https://images.unsplash.com/photo-1615879965520-cde89ea80726?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
        image_4="https://images.unsplash.com/photo-1569174633380-143b88fbc346?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_5="https://images.unsplash.com/photo-1484723716394-f77a8252330d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        post_lat=29.815900,
        post_lng=-95.458540,
        description="Brought me to a random alleyway- guess you can't always randomly find an amazing place on here. Best of luck!"
    )
    jacky42 = Post(
        user_id=6,
        image_1="https://images.unsplash.com/photo-1514313122851-5167c4fca5d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        image_2="https://images.unsplash.com/photo-1545056453-f0359c3df6db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_3="https://images.unsplash.com/photo-1551500357-f50395bb3f75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_4="https://images.unsplash.com/photo-1538511059256-46e76f13f071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        image_5="https://images.unsplash.com/photo-1608751613440-8880d1a0a1a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        post_lat=29.863390,
        post_lng=-95.535090,
        description="A local bowling alley - the perfect place to spend our Saturday night!"
    )
    jacky43 = Post(
        user_id=6,
        image_1="https://images.unsplash.com/photo-1526500627444-4ae11809ad24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        image_2="https://images.unsplash.com/photo-1600759487717-62bbb608106e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image_3="https://images.unsplash.com/photo-1543862475-eb136770ae9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        image_4="https://images.unsplash.com/photo-1619957858854-1e43dfba3c4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        image_5="https://images.unsplash.com/photo-1548386135-9002f96a0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
        post_lat=29.766500,
        post_lng=-95.621940,
        description="A field of the most gorgeous flowers. We would've never found this place without Whereabouts. These are just some of the beautiful pictures we took."
    )

    all_posts = [demo1, demo2, demo3, demo4, demo5, demo6, demo7, demo8, demo9, demo10, fremy11, fremy12, fremy13, fremy14, fremy15, wembley16, wembley17, wembley18, wembley19, wembley20, wembley21, amanda22, amanda23, amanda24, amanda25, amanda26, amanda27, amanda28, amanda29, bobbie30, bobbie31, bobbie32, bobbie33, bobbie34, bobbie35, bobbie36, jacky37, jacky38, jacky39, jacky40, jacky41, jacky42, jacky43]
    for post in all_posts:
        db.session.add(post)
    db.session.commit()

def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
