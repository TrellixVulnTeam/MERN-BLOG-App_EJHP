import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Form, Input, Button, Typography } from 'antd';
import '../App.css';

const url = 'http://localhost:8000/auth/register';
const { Title } = Typography;
const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    axios.post(url, values).then((res) => {
      if (res.data?.status ==='success') {
        alert(res?.data?.message);
        navigate('/login')
      }
    }).catch((err) => {
      alert(err?.response?.data?.message)
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="my-signup">
      <Title >Registeration</Title>
      <Form className="my-form"
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item className="name1"
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="education"
          label="Education"
          name="education"
          rules={[
            {
              required: true,
              message: 'Please input your education!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="email"
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="phone"
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input a valid phone number!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="password2"
          label="Set Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please set password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default SignUp;