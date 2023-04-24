import { useEffect, useState } from "react"
import { getArticles } from '../../api/article'
import './style.css'
import { getDrinks } from "../../api"
import { getUserByName } from '../../api/user'
import { Layout, Typography, Card, Space, Row } from "antd"
import axios from 'axios'

export const HomePage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:80/books.php").then(res => {
            setBooks(res.data)
        })
    }, [])

    useEffect(() => {
        Promise.resolve(getUserByName()).then(data => {
            //console.log(data);
        });;
        Promise.resolve(getDrinks()).then(data => {
            //console.log(data);
            setDrinks(data);
        });
        Promise.resolve(getArticles()).then(data => {
            //console.log(data)
            setNews(data)
        });
    }, []);


    return (
        <Layout.Content className="site-layout" style={{ padding: '16px 50px' }}>
            <div style={{ padding: 24, minHeight: 380, background: "white" }}>
                <Typography.Title level={4}>Nhà sách LTW</Typography.Title>

                <Space>
                    {books.map((data) => {
                        const chunkSize = 4

                        return <Row>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://salt.tikicdn.com/cache/750x750/ts/product/19/57/d2/f8e8ac1e83c74d24ef57d5e1a8194be7.jpg.webp" />}
                            >
                                <Card.Meta title={data.name} description={data.genre} />
                            </Card>
                        </Row>
                    })}
                </Space>
            </div>
        </Layout.Content>
    )
}