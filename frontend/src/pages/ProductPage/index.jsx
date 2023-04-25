import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css'
import { addToOrder, getDrinkById, getDrinks } from "../../api";
import { Button, Form, Col, Image, InputNumber, Layout, Rate, Row, Typography, Divider, Card } from "antd";
import axios from "axios";
import Price from "./Price";

export const ProductPage = () => {
    const match = useParams({ id: Number });
    const [product, setProduct] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const [productList, setProductList] = useState([]);
    const [cost, setCost] = useState(0);
    const breadcrumb = {
        parent: [
            {
                link: "/home",
                name: "Trang chủ"
            },
            {
                link: "/shop",
                name: "Menu"
            },
        ],
        current: product?.name
    }

    const size = [
        {
            name: "Vừa",
            extraPrice: 0
        },

        {
            name: "Trung",
            extraPrice: 6_000
        },
        {
            name: "Lớn",
            extraPrice: 8_000
        }
    ]
    const toppings = [
        {
            id: 1,
            name: "Đào ngâm",
            price: 10_000
        },
        {
            id: 2,
            name: "Trân châu trắng",
            price: 15_000
        },
        {
            id: 3,
            name: "Foam Cheese",
            price: 20_000
        }
    ]

    const [toCart, setToCart] = useState({});


    const [selectedTopping, setSelectedTopping] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:80/books.php?id=" + match.id).then((res) => {
            console.log(res.data)
        })
    }, [match.id]);

    const handleSelectSize = (size) => {
        if (selectedSize) {
            if (selectedSize.name === size.name) {
                setSelectedSize(undefined);
            } else {
                setSelectedSize(size);
            }
        } else {
            setSelectedSize(size);
        }
    };

    const handleSelectTopping = (topping) => {
        if (selectedTopping.length === 0) {
            setSelectedTopping([...selectedTopping, topping]);
        }
        else {
            if (selectedTopping.find(i => i.id === topping.id)) {
                const tmp = selectedTopping.filter(i => i.id !== topping.id)
                setSelectedTopping(tmp)
            }
            else {
                setSelectedTopping([...selectedTopping, topping]);
            }
        }
    };

    const costPlus = () => {
        let cost = parseInt((product?.price || 0)) +
            (selectedSize?.extraPrice || 0);

        selectedTopping.forEach(i => {
            cost += i.price
        })
        return cost * quantity
    }

    const checkTopping = (topping) => {
        let tmp = 0
        selectedTopping.forEach(i => {
            i.id === topping.id && tmp++
        })
        return tmp
    }

    const handleSub = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCartClick = async () => {
        if (!selectedSize) {
            alert("Vui lòng chọn size đồ uống!!");
            return;
        }

        const tmp = {
            product,
            selectedSize,
            selectedTopping,
            cost: costPlus(),
            quantity
        }
        // add to cart

        addToOrder(match.id, quantity, selectedSize, selectedTopping);
        alert("Thêm vào giỏ hàng thành công!!");
    }

    return (
        <Layout.Content style={{ padding: '16px 50px' }}>
            <div style={{ padding: 24, minHeight: 380, background: "white" }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Image src="https://salt.tikicdn.com/cache/750x750/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg.webp" />
                    </Col>
                    <Col span={16}>
                        <span style={{ fontSize: "16px" }}>Tác giả: Đức Lương</span>
                        <Typography.Title level={3} style={{ margin: "8px 0" }}>Tâm Lý Học Về Tiền</Typography.Title>
                        <Rate disabled defaultValue={2} />

                        <Price />

                        <Form style={{ marginTop: "24px" }}>
                            <Form.Item label="Số lượng">
                                <InputNumber min={1} defaultValue={1} bordered={false} />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" danger size="large">Thêm vào giỏ hàng</Button>
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
