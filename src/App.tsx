import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import Main from "./n1-main/m1-ui/main/Main";
import store from "./n1-main/m2-bll/store/store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <Main/>
            </Provider>
        </div>
    );
}

export default App;
