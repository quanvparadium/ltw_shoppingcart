import './style.css'
import { Layout, Typography, Card, Space, Tabs, Image } from "antd"
import Ads from './Ads'
import Common from './Common'
import Up from './Up'
import Down from './Down'

export const HomePage = () => {
    const tabItems = [
        {
            label: "Phổ biến",
            key: "tab_1",
            children: <Common />
        },
        {
            label: "Giá thấp đến cao",
            key: "tab_3",
            children: <Up />
        },
        {
            label: "Giá cao đến thấp",
            key: "tab_4",
            children: <Down />
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
                    style={{ marginTop: "15px" }}
                />

            </div>
        </Layout.Content>
    )
}