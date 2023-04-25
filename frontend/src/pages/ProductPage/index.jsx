import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css'
import { addToOrder, getDrinkById, getDrinks } from "../../api";
import { Button, Form, Col, Image, InputNumber, Layout, Rate, Row, Typography, Divider, Card, message } from "antd";
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
                <Row gutter={16}>
                    <Col span={8}>
                        <Image src="https://salt.tikicdn.com/cache/750x750/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg.webp" />
                    </Col>
                    <Col span={16}>
                        <span style={{ fontSize: "16px" }}>Tác giả: {book?.book_id ? book['book_id'] : "Chưa cập nhật"}</span>
                        <Typography.Title level={3} style={{ margin: "8px 0" }}>Tâm Lý Học Về Tiền</Typography.Title>
                        <Rate disabled defaultValue={2} />

                        <Price />

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
                                        if (newCart.items[i].id === match.id) {
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
                                Tiền bạc có ở khắp mọi nơi, nó ảnh hưởng đến tất cả chúng ta, và khiến phần lớn chúng ta bối rối. Mọi người nghĩ về nó theo những cách hơi khác nhau một chút. Nó mang lại những bài học có thể được áp dụng tới rất nhiều lĩnh vực trong cuộc sống, như rủi ro, sự tự tin, và hạnh phúc. Rất ít chủ đề cung cấp một lăng kính phóng to đầy quyền lực giúp giải thích vì sao mọi người lại hành xử theo cách họ làm hơn là về tiền bạc. Đó mới là một trong những chương trình hoành tráng nhất trên thế giới.  Chúng ta hiếm khi lâm vào hoàn cảnh nợ ngập đầu ư? Biết tiết kiệm để dành cho lúc khốn khó hơn ư? Chuẩn bị sẵn sàng cho việc nghỉ hưu? Có những cái nhìn thiết thực về mối quan hệ giữa tiền và hạnh phúc của chúng ta hơn phải không?  Chúng ta đều làm những điều điên rồ với tiền bạc, bởi vì chúng ta đều còn khá mới mẻ với trò chơi này và điều có vẻ điên rồ với bạn lại có khi hợp lý với tôi. Nhưng không ai là điên rồ cả – chúng ta đều đưa ra các quyết định dựa trên những trải nghiệm độc đáo riêng có mang vẻ hợp lý với mình ở bất cứ thời điểm nào.  Mục đích của cuốn sách này là sử dụng những câu chuyện ngắn để thuyết phục bạn rằng những kỹ năng mềm còn quan trọng hơn khía cạnh lý thuyết của đồng tiền. Thông qua một tập hợp những thử nghiệm và sai lầm của nhiều năm chúng ta đã học được cách trở thành những nông dân giỏi giang hơn, những thợ sửa ống nước nhiều kỹ năng hơn, và những nhà hóa học tiên tiến hơn. Nhưng liệu việc thử nghiệm và sai lầm có dạy chúng ta trở nên giỏi hơn trong cách quản lý tài chính cá nhân của chính mình không?
                            </Typography.Paragraph>
                        </Card>
                    </Col>
                </Row>

            </div>
        </Layout.Content>
    );
};
