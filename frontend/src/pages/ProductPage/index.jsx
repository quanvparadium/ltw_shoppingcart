import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css'
import { Button, Form, Col, Image, InputNumber, Layout, Rate, Row, Typography, Divider, Card, message, Empty } from "antd";
import axios from "axios";
import Price from "./Price";
import { MainContext } from "../../components/context";

export const ProductPage = () => {
    const match = useParams({ id: Number });
    const { cart, updateCart } = useContext(MainContext)
    const [book, setBook] = useState(null)
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        axios.get("http://localhost:80/books.php?id=" + match.id).then((res) => {
            setBook(res.data)
        })
    }, [match.id]);

    return (
        <Layout.Content style={{ padding: '16px 50px' }}>
            {contextHolder}
            <div style={{ padding: 24, minHeight: 380, background: "white" }}>
                {
                    book === null ? <Empty /> :
                        <Row gutter={16}>
                            <Col span={8}>
                                <Image src={book.thumbnail} />
                            </Col>
                            <Col span={16}>
                                <span style={{ fontSize: "16px" }}>Tác giả: {book.author_name}</span>
                                <Typography.Title level={3} style={{ margin: "8px 0" }}>{book.name}</Typography.Title>
                                <Rate disabled defaultValue={Math.max(Math.floor(Math.random() * 5), 1)} />

                                <Price price={book.price} original_price={book.original_price} discount_rate={book.discount_rate} />

                                <Form style={{ marginTop: "24px" }}>
                                    <Form.Item label="Số lượng">
                                        <InputNumber min={1} defaultValue={1} bordered={false} />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" danger size="large" onClick={() => {
                                            const newCart = {
                                                ...cart,
                                                items: [
                                                    ...cart.items
                                                ]
                                            }

                                            let notFound = true
                                            for (let i = 0; i < newCart.items.length; i++) {
                                                if (newCart.items[i].book_id === match.id) {
                                                    newCart.items[i].amount += 1
                                                    notFound = false
                                                    break
                                                }
                                            }

                                            if (notFound) {
                                                newCart.items.push({ ...book, amount: 1 })
                                            }

                                            updateCart(newCart)

                                            messageApi.success("Đã thêm sách vào giỏ hàng!")
                                        }}>Thêm vào giỏ hàng</Button>
                                    </Form.Item>
                                </Form>

                                <Card title="Mô tả sản phẩm" style={{ marginTop: "24px" }}>
                                    <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                                        {book.short_description}
                                    </Typography.Paragraph>
                                </Card>
                            </Col>
                        </Row>

                }

            </div>
        </Layout.Content>
    );
};
