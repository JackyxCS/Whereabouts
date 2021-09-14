import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import './nav.css';

const NavBar = () => {

    const user = useSelector(state => state.session.user)

    if (user) {
        return (
            <nav>
                <div className="logo-nav-link">
                    <NavLink exact to="/"><img className="navbar-logo" src="/logo_placeholder.png" alt="logo" /></NavLink>
                </div>
                <div className="right-nav-links">
                    <div className="explore-nav-link">
                        <NavLink exact to='/explore' activeClassName='active'>
                            Explore
                        </NavLink>
                    </div>
                    <div className="profile-nav-link">
                        <NavLink to={`/users/${user.id}`}>
                            {user.username}
                        </NavLink>
                    </div>
                    <div className="logout-nav-link">
                        <LogoutButton />
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav>
                <div className="logo-nav-link">
                    <NavLink exact to="/"><img className="navbar-logo" src="/logo_placeholder.png" alt="logo" /></NavLink>
                </div>
                <div className="right-nav-links">
                    <div className="explore-nav-link">
                        <NavLink exact to='/preview' activeClassName='active'>
                            Explore
                        </NavLink>
                    </div>
                    <div>
                        <LoginFormModal />
                    </div>
                    <div>
                        <SignUpFormModal />
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
