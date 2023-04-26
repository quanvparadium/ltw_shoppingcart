import './style.css'
import React, { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
// import { blog } from '../../data'
import { BlogContainerGrid } from '../../components/Blog'
import { useEffect } from 'react'
import { getArticles } from '../../api/article'
import { Card, Divider, Layout, Space, Typography } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const BlogListPage = () => {
    const navigate = useNavigate()

    const breadcrumb = {
        parent: [
            {
                name: "Trang chủ",
                link: "/home"
            }
        ],
        current: "Bài viết"
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/article.php").then(res => {
            setNews(res.data)
        })
    }, [])

    return (
        <Layout.Content className="site-layout" style={{ padding: '16px 50px' }}>
            <div style={{ padding: 24, minHeight: 380, background: "white" }}>
                <Typography.Title level={3}>Tin tức</Typography.Title>

                <Divider />

                <Space size={"large"} wrap>
                    {
                        news.map((data) => {
                            return (
                                <Card
                                    key={data.article_id}
                                    hoverable
                                    style={{ width: 300}}
                                    cover={<img width={240} height={180} alt="backdrop" src={data.image} />}
                                    onClick={() => {
                                        navigate("/articles/" + data.article_id)
                                    }}
                                >
                                    <Card.Meta title={data.title} description={data.date} />
                                </Card>
                            )
                        })
                    }
                </Space>

            </div>
        </Layout.Content>
    )
}