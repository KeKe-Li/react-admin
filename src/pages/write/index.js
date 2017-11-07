import React from "react";
import {Col, Row} from "antd";
import "./index.less";
import Fetch from "../../utils/fetch";

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [] //初始化list[]
        }
    }

    //组件加载完毕之后立即执行
    componentDidMount() {
        Fetch.getRequest("https://phodal.github.io/growth-api-gitbook/api.json", null, (data) => {
            console.log(data);
            //使用setState方法覆盖当前元素的arrData数据
            this.setState({
                list: data
            })
        },(error) =>{
            console.log(error)
        });
    }



    render() {
        //map循环获取数据
        const dataShow = this.state.list.map((item ,index) =>{
            return(
                <div className="text-blue" key={index}>
                    <Row>
                        <Col xs={{span:24}} md={{span:6,offset:2}}>
                            <div>{item.heading}</div>
                        </Col>
                        <Col xs={{span:24}} md={{span:6,offset:2}}>
                            <ul>
                                {
                                    item.childrens.map((subitem,i,index) =>{
                                        return (
                                            <li key={i}>
                                                <a href={subitem.href} key={subitem.index}>{subitem.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                    </Row>
                </div>
            )
        });



        return (
            <div>
                <Row>
                    <Col xs={12} sm={12} md={24} lg={24} xl={24}>
                        <div className="wrapper text-center">
                            <div className="clear text-color">
                                <h4 className="margin-20">
                                    {dataShow}
                                </h4>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}


