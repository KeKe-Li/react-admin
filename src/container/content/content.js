import React from "react";
import {Route} from "react-router-dom";
import {Layout} from "antd";
import "./content.less";
import index from "../../pages/index";
import Write from "../../pages/write"


const {Content} = Layout;

export default class Contents extends React.Component {

    render() {
        return (
            <Content className="content">
                <Route path="/index" component={index}/>
                <Route path="/write" component={Write}/>
            </Content>
        );
    }
}