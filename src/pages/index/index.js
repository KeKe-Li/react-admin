import React from 'react';
import { Row, Col, Card} from 'antd';
import './index.less'
import Fetch from "../../utils/fetch";

export default class index extends React.Component {


    componentDidMount() {
        Fetch.getRequest("192.168.2.139:81/api/transportation", null, (data) => {
            console.log(data);
        },(error) =>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Row gutter={10}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">欢迎进入react管理</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}