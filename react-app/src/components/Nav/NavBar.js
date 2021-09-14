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
                    <div className="page-nav-link">
                        <NavLink className="page-navlink-text" exact to='/explore' activeClassName='active'>
                            Explore
                        </NavLink>
                    </div>
                    <div className="page-nav-link">
                        <NavLink className="page-navlink-text" to={`/users/${user.id}`}>
                            Profile
                        </NavLink>
                    </div>
                    <LogoutButton />
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
                    <div className="page-nav-link">
                        <NavLink className="page-navlink-text" exact to='/preview' activeClassName='active'>
                            Explore
                        </NavLink>
                    </div>
                    <div className="login-nav">
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
