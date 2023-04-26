import { Carousel, Image } from "antd"

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function () {
    return <Carousel autoplay style={{ maxWidth: "841px", margin: "0 auto" }}>
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

}