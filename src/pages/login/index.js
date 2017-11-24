import React from 'react';
import { Form, Input, Button,Icon } from 'antd';
import createHistory from 'history/createHashHistory';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
// import ServiceUrl from '../../utils/Service';
// import  Fetch from '../../utils/fetch';

import './index.less'

const FormItem = Form.Item;
const history = createHistory();


class LoginPage extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { fetchData } = this.props;
        let username = this.props.form.getFieldsValue().username;
        let password = this.props.form.getFieldsValue().password;
        if (username === 'admin' && password === 'admin') {
            // 表单的路由
            history.push('/index');
        }

        // let parameter = {
        //     "username":this.props.form.getFieldsValue().username,
        //     "password":this.props.form.getFieldsValue().password
        // };
        //
        // let loginUrl = ServiceUrl.login;
        //
        // Fetch.postRequest(loginUrl,parameter,function (data) {
        //     console.log(data);
        // },function (error) {
        //     console.log(error);
        // })
    };

    componentDidMount() {
        // this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p className="title">admin</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {rules: [{ required: true, message: '请输入用户名' }],})(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }}/>} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {rules: [{ required: true, message: '请输入密码' }],})(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                <a className="login-form-forgot" href="#">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                            </FormItem>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }


}


let Login = Form.create()(LoginPage);
export default Login;