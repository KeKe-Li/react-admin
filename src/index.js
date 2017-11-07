import React from "react";
//DOM操作的具体方法
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";
import {createStore} from "redux";
import routes from "./router/routes";
import "./assets/styles/index.less";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        { routes }
    </Provider>,
    document.getElementById('app')
);