import { Header } from '../../Header'
import { useState, useEffect, useContext } from 'react'
import { Button, Drawer, Layout, Table, theme } from 'antd'
import { MainContext } from '../../context'
import { DeleteOutlined } from '@ant-design/icons'

export const DefaultLayout = (props) => {
    const [page, setPage] = useState(1)
    const { cart, updateCart } = useContext(MainContext)

    const columns = [
        {
            title: 'Tên sách',
            dataIndex: 'name',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
        },
        {
            title: 'Thành tiền',
            key: "total_money",
            render: (_, data) => {
                return Number((data.amount * data.price).toFixed(1)).toLocaleString()
            }
        },
        {
            title: <DeleteOutlined />,
            key: "delete",
            render: (_, data) => {
                return <Button icon={<DeleteOutlined />} style={{ lineHeight: 1 }} onClick={() => {
                    const newCart = {
                        ...cart,
                        items: []
                    }

                    for (let i = 0; i < cart.items.length; i++) {
                        if (cart.items[i].id !== data.id)
                            newCart.items.push(cart.items[i])
                    }

                    updateCart(newCart)
                }} />
            }
        }
    ];



    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [page])

    const onClose = () => {
        const newCart = {
            ...cart,
            open: false
        }

        updateCart(newCart);
    };

    return (
        <Layout>
            <Header />
            {props.children}

            <Drawer title="Giỏ hàng của tôi" placement="right" onClose={onClose} open={cart.open}>
                <Table
                    columns={columns}
                    dataSource={cart.items}
                />

                <Button type='primary'>Thanh toán</Button>
            </Drawer>
        </Layout>
    )
}