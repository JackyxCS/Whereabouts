import React from 'react';
import { useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import PhotoGrid from '../PhotoGrid';
import LoginFormModal from '../auth/LoginFormModal';


function Explore() {

    const user = useSelector(state => state.session.user)

    if (user) {
        return <Redirect to='/explore' />;
    }

    return (
        <div>
            <h2>Give this PhotoGrid some query props! (just 9 posts for teaser)</h2>
            <PhotoGrid />
            <h2>Sign up or log in to see everything!</h2>
            <LoginFormModal />
        </div>
    );
};

export default Explore;
