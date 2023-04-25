import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context'
import './style.css'
import { Avatar, Badge, Button, Col, Input, Layout, Row, Space, Typography } from 'antd';
import { AmazonOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { MainContext } from '../context';


export const Header = () => {
    // const user = useAppContext()
    const navigate = useNavigate()
    const { cart, updateCart } = useContext(MainContext)

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
                <Col span={16}>
                    <Link to={"/"}>
                        <Space>
                            <Avatar icon={<AmazonOutlined />} />
                            <Typography.Title level={4} style={{ margin: 0, color: "white" }}>LẬP TRÌNH WEB</Typography.Title>
                        </Space>
                    </Link>
                </Col>
                <Col span={8}>
                    <Row justify={"space-between"}>
                        <Col span={16} style={{
                            display: 'flex',
                            alignItems: "center"
                        }}>
                            <Input.Search />
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
                            <Link to={"/login"}>
                                <Button type='primary'>Login</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Header>
    )
}