import React from 'react';
import {HashRouter} from "react-router-dom";
import Header from "../header/Header";
import Pages from "../pages/Pages";

const Main = () => {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>

            
        </div>
    );
};

export default Main;