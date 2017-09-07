import React from "react";
import { render } from 'react-dom'
import Application from "./Application";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { noPortalApp } from "./reducers";

let store = createStore(noPortalApp);

render((
    <Provider store={store}>
        <Application />
    </Provider>),
    document.getElementById("root")
);
