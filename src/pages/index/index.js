import React from 'react';
import { Row, Col, Card} from 'antd';
import './index.less'
import Fetch from '../../utils/fetch'

export default class index extends React.Component {

    get = () => {

    };

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
                                        <button type='button' className="login" onClick={this.get}>
                                            获取
                                        </button>
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