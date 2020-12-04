import React from 'react';

import {Navigator} from "./config/navigator";
import {Provider} from "react-redux";
import {store} from "./config/redux/reducer";

export default function App() {

    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}

