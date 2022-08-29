import React from 'react';
import {PATH} from "../routes/path";
import {NavLink, Route} from "react-router-dom";
import Registration from "../../../n2-features/f1-auth/a2-registration/Registration";
import NewPassword from "../../../n2-features/f1-auth/a3-password/newPassword/NewPassword";
import RecoveryPassword from "../../../n2-features/f1-auth/a3-password/ recoveryPassword/RecoveryPassword";
import Profile from "../../../n2-features/f2-profile/Profile";
import Test from "../test/Test";

const Header = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent:'space-around'
        }}>
            <NavLink to={PATH.LOGIN}>Login</NavLink>
            <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
            <NavLink to={PATH.NEW_PASSWORD}>New Password</NavLink>
            <NavLink to={PATH.RECOVERY_PASSWORD}>Recovery password</NavLink>
            <NavLink to={PATH.PROFILE}>Profile</NavLink>
            <NavLink to={PATH.TEST}>Test</NavLink>
        </div>
    );
};

export default Header;