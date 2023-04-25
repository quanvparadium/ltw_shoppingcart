import { useEffect, useState } from "react"
import { getArticles } from '../../api/article'
import './style.css'
import { getDrinks } from "../../api"
import { getUserByName } from '../../api/user'
import { Layout, Typography, Card, Space, Tabs } from "antd"
import axios from 'axios'
import Ads from './Ads'
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()

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

    const tabItems = [
        {
            label: "Phổ biến",
            key: "tab_1",
            children: "Content of commong"
        },
        {
            label: "Bán chạy",
            key: "tab_2",
            children: "Content of best selling"
        },
        {
            label: "Giá thấp đến cao",
            key: "tab_3",
            children: "Gia cao thap"
        },
        {
            label: "Giá cao đến thấp",
            key: "tab_4",
            children: "Gia cao cao"
        }
    ]


    return (
        <Layout.Content className="site-layout" style={{ padding: '16px 50px' }}>
            <div style={{ padding: 24, minHeight: 380, background: "white" }}>
                <Typography.Title level={4}>Nhà sách LTW</Typography.Title>

                <Ads />

                <Tabs
                    defaultActiveKey="1"
                    items={tabItems}
                    style={{ marginTop: "15px"}}
                />

                <Space wrap style={{ justifyContent: "center" }}>
                    {books.map((data) => {
                        const chunkSize = 4

                        return <Card key={data.book_id}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={data.thumbnail} />}
                            onClick={() => {
                                navigate("/books/" + data.book_id)
                            }}
                        >
                            <Card.Meta title={data.name} description={data.genre} />
                        </Card>
                    })}
                </Space>
            </div>
        </Layout.Content>
    )
}