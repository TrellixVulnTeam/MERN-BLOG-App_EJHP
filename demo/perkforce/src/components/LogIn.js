import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import '../App.css';
import { Button, Typography, Input, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const url = 'http://localhost:8000/auth/login';
const { Title, Text } = Typography;
const LogIn = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm()
  const handleSubmit = async (values) => {
    const loginValues = form.getFieldsValue(values);
    // Api post request
    axios.post(url, loginValues).then((res) => {
      if (res?.data?.status === 'success') {
        alert(res?.data?.message);
        navigate('/')
      }
    }).catch((err) => {
      alert(err?.response?.data?.message)
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className='App'>
        <Form form={form} onFinish={handleSubmit} onFinishFailed={onFinishFailed}
        >
          <Title className='main-heading'> Welcome to PerkForce</Title>
          <Form.Item name='email' rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}>
            <Input className='input__field' size="large" placeholder="Email" />
          </Form.Item>
          <br />
          <Form.Item name='password' rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}>
            <Input.Password className='password' size="large" placeholder="Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
          </Form.Item>
          <br />
          <Button htmlType='submit' className='logIn' type="primary" >Log In</Button>
          <br />
        </Form>
        <Text type="secondary" className='text-last' > Do not have an account? </Text>
        <br />
        <Button className='signUp' type="primary"></Button>
        <Link to="/register "> Sign Up</Link>

      </div>
    </>
  )
}

export default LogIn;