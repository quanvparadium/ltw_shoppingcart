import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Empty, Image, Layout, Space, Typography } from "antd";
import axios from "axios";

export const BlogPage = () => {
    const [article, setArticle] = useState({});

    const match = useParams({ id: Number })

    useEffect(() => {
        axios.get("http://localhost/article.php?id=" + match.id).then(res => {
            setArticle(res.data)
        })
    }, [match.id]);

    return (
        <Layout.Content className="site-layout" style={{ padding: '16px 50px' }}>
            {article === undefined ? <Empty /> :
                <div style={{ padding: 24, minHeight: 380, background: "white" }}>
                    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
                        <Image width={500} src={article.image} />
                        <Typography.Title level={3} style={{ marginTop: "15px" }}>{article.title}</Typography.Title>
                        <Typography.Text strong>{article.date}</Typography.Text>
                        <Space style={{ width: "100%" }} direction="vertical" size={"large"} align="center">

                            <Typography.Paragraph>{article.content}</Typography.Paragraph>
                        </Space>
                    </div>
                </div>
            }
        </Layout.Content>
    )
}