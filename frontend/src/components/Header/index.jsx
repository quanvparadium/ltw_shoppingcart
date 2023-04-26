import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context'
import './style.css'
import { Avatar, Badge, Button, Col, Dropdown, Empty, Input, Layout, Row, Space, Typography } from 'antd';
import { AmazonOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { MainContext } from '../context';
import Cookies from 'universal-cookie';

export const Header = () => {
    // const user = useAppContext()
    const navigate = useNavigate()
    const cookie = new Cookies()
    const { cart, updateCart } = useContext(MainContext)

    const items = [
        {
            key: '1',
            label: (
                <Link to={"/profile"}>
                    Trang cá nhân
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    cookie.remove('userRole', { path: '/' });
                    navigate("/login")
                }}>
                    Đăng xuất
                </div>
            ),
        },
    ];


    const handleUserClick = (e) => {
        e.preventDefault();

        const role = localStorage.getItem('role');
        console.log(role);

        if (!role) {
            navigate('/login')
        }
        else if (role === 'ad') {
            navigate('/admin')
        }
        else {
            navigate('/user')
        }
    }

    return (
        <Layout.Header>
            <Row >
                <Col span={14}>
                    <Link to={"/"}>
                        <Space>
                            <Avatar icon={<AmazonOutlined />} />
                            <Typography.Title level={4} style={{ margin: 0, color: "white" }}>LẬP TRÌNH WEB</Typography.Title>
                        </Space>
                    </Link>
                </Col>
                <Col span={10}>
                    <Row justify={"space-between"}>
                        <Col span={10} style={{
                            display: 'flex',
                            alignItems: "center"
                        }}>
                            <Input.Search />
                        </Col>
                        <Col style={{ color: "white" }}>
                            <Link to={"/articles"}>
                                Tin tức
                            </Link>
                        </Col>
                        <Col style={{ color: "white" }}>
                            <Link to={"/about"}>
                                About
                            </Link>
                        </Col>
                        <Col onClick={() => {
                            const newCart = {
                                ...cart,
                                open: !cart.open
                            }

                            updateCart(newCart)
                        }}>
                            <Badge count={cart.items.length} showZero>
                                <Avatar type='primary' icon={<ShoppingCartOutlined />} />
                            </Badge>
                        </Col>
                        <Col>
                            {
                                cookie.get("userRole") ? <Dropdown menu={{ items }} placement="topRight" arrow>
                                    <Avatar type='primary' icon={<UserOutlined />} />
                                </Dropdown> :

                                    <Link to={"/login"}>
                                        <Button type='primary'>Login</Button>
                                    </Link>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Header>
    )
}