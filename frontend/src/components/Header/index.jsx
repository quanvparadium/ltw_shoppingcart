import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context'
import './style.css'
import { Avatar, Badge, Button, Col, Input, Layout, Row, Space, Typography } from 'antd';
import { AmazonOutlined, ShoppingCartOutlined } from '@ant-design/icons'


export const Header = () => {

    // const user = useAppContext()
    const navigate = useNavigate()

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
                    <Space>
                        <Avatar icon={<AmazonOutlined />} />
                        <Typography.Title level={4} style={{ margin: 0, color: "white" }}>LẬP TRÌNH WEB</Typography.Title>
                    </Space>

                </Col>
                <Col span={8}>
                    <Row justify={"space-between"}>
                        <Col span={16} style={{
                            display: 'flex',
                            alignItems: "center"
                        }}>
                            <Input.Search />
                        </Col>
                        <Col>
                            <Badge count={0} showZero>
                                <Avatar type='primary' icon={<ShoppingCartOutlined />} />
                            </Badge>
                        </Col>
                        <Col>
                            <Button type='primary'>Login</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Header>
    )
}