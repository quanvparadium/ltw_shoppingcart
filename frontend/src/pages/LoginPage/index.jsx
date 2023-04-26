import { useState } from 'react'
import Signup from './Signup.jsx'
import './style.css'
import { Button, Checkbox, Form, Input, Typography, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

export const LoginPage = () => {
    const cookie = new Cookies()
    const [choose, setChoose] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    const handleClick = () => {
        choose === 0 ? setChoose(1) : setChoose(0);
    }

    const onFinish = (e) => {
        const formData = new FormData();
        Object.keys(e).forEach(key => formData.append(key, e[key]));

        axios.post("http://localhost:80/login.php", formData).then(res => {
            cookie.set('userRole', res.data.token.role, { path: '/' });
            navigate("/")
        }).catch(err => {
            message.error(err.response.data.message)
        })
    }

    return (
        <div className='login-container'>
            {contextHolder}
            <div className='login-wraper'>
                <Typography.Title level={3}>Nhà sách LTW</Typography.Title>
                {
                    choose === 0 ?
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            style={{ width: "300px" }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: "100%", marginBottom: "12px" }}>
                                    Log in
                                </Button>
                                Or <Typography.Link onClick={() => {
                                    setChoose(1)
                                }}>Register now!</Typography.Link>
                            </Form.Item>
                        </Form>
                        :
                        <div className='login-choose'>
                            <span className='login-swap'>Đã có tài khoản? <Typography.Link onClick={handleClick}>Đăng nhập</Typography.Link></span>
                            <Signup switchLogin={handleClick} messageAPI={messageApi} />
                        </div>
                }
            </div>
        </div>
    )
}