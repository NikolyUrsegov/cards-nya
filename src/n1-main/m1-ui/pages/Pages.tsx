import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../routes/path";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Registration from "../../../n2-features/f1-auth/a2-registration/Registration";
import NewPassword from "../../../n2-features/f1-auth/a3-password/newPassword/NewPassword";
import Error404 from "../Error404/Error404";
import RecoveryPassword from "../../../n2-features/f1-auth/a3-password/ recoveryPassword/RecoveryPassword";
import Profile from "../../../n2-features/f2-profile/Profile";
import Test from "../test/Test";

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

export default Pages;