import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "antd";
import "./content.less";
import index from "../../pages/index";
import Write from "../../pages/write";
import Editor from "../../pages/editor";


const {Content} = Layout;

export default class Contents extends React.Component {

    render() {
        return (
            <Content className="content">
                <Router path="/index" component={index}/>
                <Router path="/write" component={Write}/>
                <Router path="/tools" component={Editor}/>
                <Router path="/editor" component={Editor}/>
            </Content>
        );
    }
}