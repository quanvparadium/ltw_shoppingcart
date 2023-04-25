import { Layout, Typography } from "antd"

function Contact() {
    return <Layout.Content className="site-layout" style={{ padding: '16px 50px' }}>
        <div style={{ padding: 24, minHeight: 380, background: "white" }}>
            <Typography.Title>Giới thiệu về nhà sách LTW</Typography.Title>
            <Typography.Paragraph style={{ fontSize: "16px", lineHeight: 1.5 }}>
                Xin chào, trang web bán sách mà bạn đang đề cập có thể là một trang web thương mại điện tử được phát triển trong khuôn khổ bài tập lớn môn Lập trình web của Trường Đại học Bách Khoa. Trang web này có thể được thiết kế để cung cấp một giao diện đơn giản và thân thiện cho người dùng để tìm kiếm và mua các loại sách khác nhau.
                Trang web bán sách có thể có các tính năng chính sau:
                <ul>
                    <li>
                        Tìm kiếm sách: Người dùng có thể tìm kiếm sách bằng cách nhập tên sách hoặc tác giả vào hộp tìm kiếm.
                    </li>
                    <li>
                        Danh mục sách: Trang web có thể được phân loại các sách vào các danh mục khác nhau, cho phép người dùng dễ dàng tìm kiếm và duyệt sách.
                    </li>
                    <li>
                        Chi tiết sản phẩm: Mỗi sách có thể có một trang riêng biệt với thông tin chi tiết về tên sách, tác giả, giá, mô tả và ảnh minh họa.
                    </li>
                    <li>
                        Giỏ hàng: Người dùng có thể thêm sách vào giỏ hàng của họ để mua sau này.
                    </li>
                    <li>
                        Thanh toán: Người dùng có thể thanh toán trực tuyến để mua sách và đặt hàng.
                    </li>
                    <li>
                        Đăng ký và đăng nhập: Người dùng có thể đăng ký và đăng nhập để lưu trữ thông tin cá nhân, theo dõi đơn hàng và quản lý tài khoản của mình.
                    </li>
                    <li>
                        Đăng ký và đăng nhập: Người dùng có thể đăng ký và đăng nhập để lưu trữ thông tin cá nhân, theo dõi đơn hàng và quản lý tài khoản của mình.
                    </li>
                </ul>

                Trang web bán sách có thể sử dụng các công nghệ như HTML, CSS, JavaScript, PHP và MySQL để phát triển và triển khai. Ngoài ra, trang web này có thể được tối ưu hóa cho các thiết bị di động để đảm bảo tương thích với các nền tảng khác nhau.
            </Typography.Paragraph>
        </div>
    </Layout.Content>
}

export default Contact;