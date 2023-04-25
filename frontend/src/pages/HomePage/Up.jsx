import { Card, Empty, Space } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function () {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:80/books.php?type=up").then(res => {
            setBooks(res.data)
        })
    }, [])

    return books.length === 0 ? <Empty /> : <Space wrap style={{ justifyContent: "center" }}>
        {books.map((data, idx) => {
            return <Card key={`${data.book_id}_${idx}`}
                hoverable
                style={{ width: 240 }}
                cover={<img width={240} height={240} alt="example" src={data.thumbnail} />}
                onClick={() => {
                    navigate("/books/" + data.book_id)
                }}
            >
                <Card.Meta title={data.name} description={data.genre} />
            </Card>
        })}
    </Space>

}