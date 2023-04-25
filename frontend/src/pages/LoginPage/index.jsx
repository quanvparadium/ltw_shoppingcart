import { useState } from 'react'
import { Login } from '../../components/Login'
import { SignUp } from '../../components/SignUp'
import './style.css'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

export const LoginPage = () => {
    const [choose, setChoose] = useState(0)
    const handleClick = () => {
        choose === 0 ? setChoose(1) : setChoose(0);
    }
    return (
        <div className='login-container'>
            <div className='login-wraper'>
                <Typography.Title level={3}>Nhà sách LTW</Typography.Title>
                {
                    choose === 0 ?
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            style={{ width: "300px" }}
                        // onFinish={onFinish}
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
                            <span className='login-swap'>Đã có tài khoản? <span onClick={handleClick}>Đăng nhập</span></span>
                            <SignUp switchLogin={handleClick} />
                        </div>
                }
            </div>
        </div>
    )
}