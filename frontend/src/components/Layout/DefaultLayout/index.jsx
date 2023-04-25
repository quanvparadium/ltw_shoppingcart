import { Header } from '../../Header'
import { useState, useEffect, useContext } from 'react'
import { Button, Drawer, Layout, Table, theme } from 'antd'
import { MainContext } from '../../context'

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
];


export const DefaultLayout = (props) => {
    const [page, setPage] = useState(1)
    const [openDrawer, setOpenDrawer] = useState(true)
    const { cart, updateCart } = useContext(MainContext)


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