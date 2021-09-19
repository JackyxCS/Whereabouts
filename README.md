# Whereabouts

Whereabouts is an app created for adventurers to visit random places and share about their experiences with others. Users now have a chance to uniquely explore the world, or simply their own neighborhoods, and connect with other explorers.

Start exploring here: https://app-whereabouts.herokuapp.com/

## Development

* Visit the project wiki to learn more about the app development process: https://github.com/JackyxCS/Whereabouts/wiki

* To start the development environment:
   
   i. Clone the repository at: https://github.com/JackyxCS/Whereabouts
   
   ii. Install dependencies: ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```
      
   iii. Create a **.env** file based on the example with proper settings for your
   development environment
   
   iv. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file
   
   v. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

   vi. Cd into react-app and run 
   
   ```
   npm install
   ```

   ```
   npm start
   ```

## Technologies Used

* Languages
   - Python
   - JavaScript
   - HTML
   - CSS

* Database
   - PostgreSQL

* Backend
   - Flask
   - Flask-SQLAlchemy
   - SQLAlchemy
   - Node.js

* Frontend
   - React
   - Redux
   
* Deployment and Version Control
   - Git + Github
   - Heroku
   - Docker

## Features

To see the full feature list, user stories, RESTful routes, and more: https://github.com/JackyxCS/Whereabouts/wiki

* Users
   - Users can signup, login, login as demo, logout
   - Protected routes and authentication implemented throughout the site
* Missions
   - Users can generate random missions and select missions
   - Selected missions are automatically destroyed from the database after 24 hours
* Posts
   - Users can create a post, see other posts, update their own posts, and delete their own posts
* Comments
   - Users can make a comment, see other comments, update their own comments, and delete their own comments
* Likes
   - Users can like posts, see the number of likes posts have, and remove their like
* Google Maps
* AWS Uploads

## Database Structure

![](https://github.com/JackyxCS/Whereabouts/blob/main/design/db_schema.png)

## Whereabouts in Action

* Homepage
![](https://github.com/JackyxCS/Whereabouts/blob/main/design/Homepage.png)
* Profile page
![](https://github.com/JackyxCS/Whereabouts/blob/main/design/Profilepage.png)
* Explore page
![](https://github.com/JackyxCS/Whereabouts/blob/main/design/Explorepage.png)
* Post page
![](https://github.com/JackyxCS/Whereabouts/blob/main/design/Singlepost.png)

## Code Highlights

* User Component
   - logic for AWS upload
   - logic for user profile picture display
   - logic for missions (with map) display
```function User() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => Object.values(state.users))
    const posts = useSelector(state => Object.values(state.posts))
    const currentMission = useSelector(state => Object.values(state.missionsReducer))
    const { userId } = useParams();
    const [paramUser, setParamUser] = useState({});

    useEffect(()=>{
        dispatch(getAllPosts())
    }, [dispatch])

    const userPosts = posts.filter((post) => post.user_id === Number(userId)).reverse()
    const profileOwner = users.filter(user => +userId === +user.id )[0]
  
    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setParamUser(user);
        })();

    }, [userId]);

    const inputFile = useRef(null)

    const submitProfilePic = async (e) => {
        e.preventDefault()

        const profilePic = e.target.files[0]
        const payload = {profilePic, userId}

        await dispatch(updateProfilePic(payload))
        await dispatch(fetchUsers())
        return
    }

    let addPost
    if(currentMission.length === 3){
        addPost=(<></>)
    }else if (currentMission.length === 1){
       addPost=( <PostFormModal />)
    }else{
        addPost=(<></>)
    }

    if (!user) {
        return null;
    }
    let currentProfilePic

    // THIS IS NOT YOUR PAGE
    if (profileOwner['id'] === +user?.id ) {
        if(!profileOwner.profile_picture){
            currentProfilePic = defaultUser
        } else {
            currentProfilePic = profileOwner.profile_picture
        }

    } else {
    // THIS IS YOUR PAGE
        if(!profileOwner.profile_picture){
            currentProfilePic = defaultUserPreview
        } else {
            currentProfilePic = profileOwner.profile_picture
        }
    }

    if (Number(userId) === Number(user.id)) {
        return (
            <div className="session-users-profile">
                <h1 >{user.username}'s Profile Page</h1>

                <div className="user-controls">

                    <div className="user-profile-pic-div">

                            <input
                                style={{ display: "none" }}
                                ref={inputFile}
                                name="profile_picture"
                                onChange={submitProfilePic}
                                type="file"
                            />
                            <div onClick={() => inputFile.current.click()}>
                                <img className="user-profile-pic" src={currentProfilePic} alt="user profile"/>
                            </div>
                    </div>
                    <div>{user.email}</div>

                    <div className="mission-dashboard-div">
                        <h2>Mission Dashboard</h2>
                        <a href="https://www.latlong.net/" className="form-instructions" style={{color:"var(--wa-blue)" , textDecoration:"underline", marginBottom:'10px'}} target={"_blank"} rel={"noreferrer"}>Get your coordinates</a>
                        <UserMission />
                        <div>
                            {addPost}
                        </div>
                        <div className="mission-dashboard-note">
                            <p className="mission-expiration">Active mission expires after 24 hours</p>
                            <div className ="update-location-div">
                                <p className="update-location-prompt">Need to update your current location settings?</p>
                                <LocationFormModal />
                            </div>

                        </div>
                    </div>

                    <p className="private-mission">Other users can see your posts, but not your mission dashboard</p>
                </div>

                <div className="post-section-div">
                    <h2 className="post-section-title">Posts from Past Missions</h2>
                    <PhotoGrid posts={userPosts} />
                </div>
            </div>
        );
    } else {
        return (
          <div className="other-users-profile">
            <h1>{paramUser.username}'s profile page</h1>
            <div className="user-profile-pic-div">
                <img className="other-user-profile-pic" src={currentProfilePic} alt="user profile"/>
            </div>
            <div className="post-section-div">
                <h2 className="post-section-title">Posts from Past Missions</h2>
                <PhotoGrid posts={userPosts} />
            </div>
          </div>
        )
    }
}
```
## Conclusion
* This was a challenging project incorporating logic for how the user should be allowed to generate locations and use the application. For example, the user should only be able to pick from the three randomly generated locations and a user's selected mission should be removed from the database after 24 hours.
* The project solidified the team's understanding of using a new backend framework (Flask) in conjunction with SQLAlchemy, an Object Relational Mapper (ORM) and how they function together with frontend frameworks and technologies like Redux and React to build a functioning web application.

## Whereabouts was created by:
* [Amanda Hinton](https://github.com/amandahinton)
* [Frema Awuku](https://github.com/FremaAwuku)
* [Jacky Hao](https://github.com/JackyxCS)
