import { Carousel, Col, Image, Row, Space } from "antd"

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function () {
    return <Row gutter={12}>
        <Col span={16}>
            <Carousel autoplay style={{ maxWidth: "841px", margin: "0 auto" }}>
                <div>
                    <Image src="/banner_0.jpg" />
                </div>
                <div>
                    <Image src="/banner_1.jpg" />
                </div>
                <div>
                    <Image src="/banner_2.jpg" />
                </div>
            </Carousel>
        </Col>
        <Col span={8}>
            <Space direction="vertical">
                <Image src="/top.jpg" />
                <Image src="/bottom.jpg" />
            </Space>
        </Col>
    </Row>
}