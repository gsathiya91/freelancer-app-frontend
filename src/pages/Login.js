import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userAction";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Login() {
    const dispatch = useDispatch();
    function login(values){
        dispatch(loginUser(values))
    }

  return (
    <div className="login">
      <Row justify="center" className="flex align-items-center" >
        <Col lg={10}><h1 className="heading2" data-aos='slide-left' >FREELANCER WEBAPP</h1></Col>
        <Col lg={8} sm={24} className="bs1 p-5 login-form">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              type="password"
              rules={[{ required: true }]}
            >
              <Input type="password"/>
            </Form.Item>

            <Button htmlType="submit" className="mb-3">Login</Button><br />
            <Link to='/register' className='mt-3'>Not Registered Yet ? Click here</Link>
            <p>Username : Client</p>
            <p>Password : Client@2022</p>
            <hr />
            <p>Username : Freelancer</p>
            <p>Password : FreeLancer@2022</p>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
