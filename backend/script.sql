-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 04, 2022 lúc 08:05 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

CREATE DATABASE bk_coffee;
USE bk_coffee;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bk_coffee`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `ad_id` int(11) NOT NULL,
  `start_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`ad_id`, `start_date`) VALUES
(4, NULL),
(5, NULL),
(6, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article`
--

CREATE TABLE `article` (
  `article_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `ad_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `article`
--

INSERT INTO `article` (`article_id`, `title`, `content`, `date`, `ad_id`, `image`) VALUES
(1, 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT', 'Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.\r\n\r\nĐặc điểm cà phê Robusta \r\n\r\nVề hình dạng, hạt cà phê Robusta có hình tròn, đường kính khoảng 10 – 13 mm. Hạt Robusta có màu nâu đậm và hàm lượng caffeine từ 3 - 4%, trong khi đó Arabica chỉ chiếm từ 1 - 2%.\r\n\r\nVề điều kiện trồng, cà phê Robusta sinh trưởng tốt trong vùng có mưa nhiều và nhiều ánh nắng mặt trời. Nhiệt độ thích hợp ở mức 24 - 29 độ C, ưa sống ở những vùng có độ cao dưới 1000 mét, phổ biến ở 850 – 900 mét và ở những vùng có đất đỏ bazan màu mỡ.\r\n\r\nỞ Việt Nam có rất nhiều vùng phù hợp để trồng giống Robusta, đặc biệt là Buôn Ma Thuột, Đắk Lắk, Lâm Đồng, Gia Lai, Đắk Nông,… Đây là những vùng đất mang đến hương vị cà phê Robusta nguyên chất ngon và nổi tiếng. Tuy nhiên, do sự khác biệt về thổ nhưỡng mà hương vị Robusta ở các vùng cũng có sự khác biệt tương đối', '2022-12-03', 4, 'https://file.hstatic.net/1000075078/file/thecoffeehouse_ca_phe_robusta_04_77eebbf64f264751945dd2db61050c4b_grande.jpg'),
(2, 'BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ', 'Bạn biết không, nếu khi sử dụng nhiệt độ nước thấp, một số hợp chất chính trong cà phê sẽ không được chiết xuất hiệu quả, dẫn đến cà phê có thể có vị mỏng, nhạt và có cường độ hương vị thấp. Khi nhiệt độ cao hơn, các phân tử hòa tan tăng cường hoạt động, sẽ thúc đẩy chiết xuất các chất khó tan giúp cà phê có hương vị rõ ràng, phong phú và tinh tế hơn. Thế nhưng, mỗi loại cà phê sẽ có một mức nhiệt lý tưởng riêng khi pha chế. Nắm được điều này sẽ giúp bạn có thể pha chế những tách cà phê với hương vị rõ ràng, chuẩn nhất và thưởng thức chúng một cách ưng ý nhất. \r\n\r\nNhiệt độ nước lý tưởng cho từng loại cà phê ngon\r\n\r\nTheo nghiên cứu, nhiệt độ nước lý tưởng để pha cà phê dao động từ khoảng 90 đến 96°C. Tuy nhiên, đối với từng loại cà phê, sẽ có một nhiệt độ tối ưu để các hợp chất được giải phóng một cách cân bằng và tạo nên hương vị tuyệt vời. Chẳng hạn như đối với Espresso và cà phê phin truyền thống, bạn có thể sử dụng ở mức nhiệt độ từ  90 đến 96°C. Tuy nhiên đối với cold brew thì mức ', '2022-12-03', 4, 'https://file.hstatic.net/1000075078/file/thecoffeehouse_caphe_12_ab986d8cb94d48b08ab7d5b7597cbbd9_grande.jpg'),
(3, 'THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN BÈ MÙA TẾT NÀY', 'Một chút thời gian còn lại của những ngày cuối năm, bạn muốn dành cho những người quan trọng mà mình yêu quý, cùng họ chuyện trò và sẻ chia. Hay vào những ngày đầu năm, bạn muốn gặp họ đầu tiên, để chúc cho những người bạn thương mến ngập tràn điều tốt đẹp nhất. Thế nhưng, bạn chưa tìm được một điểm hẹn lý tưởng, tiện cho cả bạn và tiện cho cả đối phương. Là nơi bạn có thể nói tất cả mọi thứ, là nơi bạn có thể thả mình, không phải lo nghĩ, là nơi để bạn thực sự tự do để thư giãn... Nếu vậy, mời bạn ghé Nhà nhé!\r\n\r\nVới 146 cửa hàng phủ sóng trên khắp cả nước, dù bạn ở đâu, bạn cũng có thể tìm cho mình một không gian hẹn hò trên cả tuyệt vời. Từ miền Bắc vào miền Nam, đâu đâu cũng là những không khí ấm áp và hiện đại của Nhà. Tại Hà Nội, TP.Hồ Chí Minh, Đà Nẵng, Khánh Hoà, Hải Phòng, hay cả Huế, Nghệ An, Cần Thơ, Tiền Giang,... bất kỳ đâu bạn cũng đến nhà thuận tiện nhất. \r\n\r\nChính vì có nhiều lợi thế như mặt bằng ở ngay trung tâm thành phố vừa tiện để vui xuân cùng gia đình, hò hẹn cùng', '2022-12-01', 4, 'https://file.hstatic.net/1000075078/article/hn-le-thanh-nghi2_d161f1f7755249cba30f2ecc7a591e47_master_1bbacee733084b93a400eaa54762bf12_master.jpg'),
(4, '“KHUẤY ĐỂ THẤY TRĂNG\" - KHUẤY LÊN NIỀM HẠNH PHÚC: TRẢI NGHIỆM KHÔNG THỂ BỎ LỠ MÙA TRUNG THU NÀY', '\"Sau khi chứng kiến cái thế giới mà ở đấy mỗi cái nắm tay cũng là điều xa xỉ, người ta liền rục rịch định nghĩa lại về hạnh phúc\", tạp chí Vogue viết. Hạnh phúc giờ đây chỉ gói gọn trong những điều giản đơn. Được xách vali bước lên chuyến bay hồi hương, được nhìn thấy nhau, được tỉ tê kể nhau nghe chuyện to chuyện nhỏ. Đó mới là điều hạnh phúc nhất sau khoảng thời gian lạ lùng vừa qua.\r\n\r\nCho đến thời điểm này, cách nghĩ đó về hạnh phúc dần trở thành một tiêu chuẩn \"bình thường mới\". Tiêu chuẩn này phần nào dự đoán cách mà người trẻ Việt chào đón Trung thu năm nay. Trải qua một năm bị chia cách bất đắc dĩ, giới trẻ giờ đây thêm trân quý những phút giây được sum vầy bên người thân, bạn bè và người thương. Hơn nữa, 2022 cũng là năm đề cao sức khỏe tinh thần, nên sẽ chẳng lạ nếu người trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ.', '2022-12-03', 5, 'https://lh4.googleusercontent.com/--NPhFBpCpk-OPywizr4rsHUjL075Qeu9WlTxqHsvbKuwIiirM32HwvxwQ-gQkTJhWXkp8wZmrU9v7_NVZz6fDCh17ElcO0KtcqaVzpzeA4_jl7l8fZF3w0cvK_7RAo1qoQ2G6X9XrJq'),
(5, '“KHUẤY ĐỂ THẤY TRĂNG” - HOT TREND MỞ MÀN MÙA TRUNG THU HẤP DẪN ĐÔNG ĐẢO GIỚI TRẺ', 'Đón trung thu “bling bling\" lần đầu tiên xuất hiện tại The Coffee House \r\nNgày 03/08 vừa qua, The Coffee House tung ra Hi-Tea Bling Bling - bộ sưu tập thức uống dành riêng cho mùa Trung thu này. Và hiệu ứng bling bling - lần đầu tiên được các barista đưa vào thức uống tại The Coffee House, trở thành trải nghiệm không thể bỏ lỡ. \r\n\r\nBởi chỉ cần khuấy nhẹ, những xoáy nước lấp la lấp lánh sắc vàng tựa ánh trăng xuất hiện cực đẹp mắt. Chưa kể, tông đỏ rực rỡ của Hi-Tea Bling Bling hệt như sắc màu của những chiếc đèn lồng đêm rằm. Không khí trung thu rộn ràng tưởng chừng chỉ có ngoài đường phố, lại được The Coffee House gói trọn trong một ly trà.', '2022-12-01', 5, 'https://lh4.googleusercontent.com/vaRooj9KjBkJxh9-eBJ5JQya-LFY1BRr6ZCQDrHr_zWjq7ol1z9xEF2CAf3U8saUvtraqAGPctZsOr-miysqt3j-lEiBq8NTXRxgVEPCl5c6ZlL8Y-HGYUc1O6ZnoVZ8UgcYJPC75P85'),
(6, '10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS', 'Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải thiện sắc đẹp và giúp tinh thần thêm hứng khởi.\r\n\r\nNhững năm gần đây, người tiêu dùng Việt quan tâm nhiều hơn đến các sản phẩm có nguồn gốc thiên nhiên, nhất là thức uống từ thảo mộc tốt cho sức khỏe. Trong đó, trà hoa Hibiscus nổi lên như thành phần quen thuộc trong rất nhiều các loại thức uống. Loại hoa này có công dụng gì mà lại được ưa chuộng đến vậy?\r\n\r\nBổ sung vitamin C, tăng cường miễn dịch\r\nHibiscus được biết đến là có hàm lượng lớn vitamin (A, C, D, E…) và khoáng chất dồi dào. Vậy nên vào những ngày thời tiết oi bức, thưởng thức một ly nước chiết xuất từ hoa Hibiscus sẽ giúp giải nhiệt, thanh mát cơ thể, cảm thấy tươi mới và giảm đi những căng thẳng, mệt mỏi. Đặc biệt, nguồn vitamin C cao trong trà Atiso đỏ (tên gọi khác của Hibiscus) giúp bạn tăng cường sức đề kháng, bảo vệ hệ miễn dịch, nâng cao sức khỏe trong tiết trời mùa hè nắng gắt, nóng nực.', '2022-12-03', 6, 'https://file.hstatic.net/1000075078/file/pr_06_bbeb9c0f3b7a4571a79c6000ccc90513_grande.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `cus_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contains`
--

CREATE TABLE `contains` (
  `drink_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `drink_count` int(11) NOT NULL,
  `size` enum('s','m','l') NOT NULL,
  `topping` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `contains`
--

INSERT INTO `contains` (`drink_id`, `order_id`, `drink_count`, `size`, `topping`) VALUES
(8, 17, 1, 's', 'Đào ngâm'),
(9, 17, 3, 's', 'Đào ngâm'),
(11, 16, 2, 's', 'Trân châu trắng,Foam Cheese'),
(12, 16, 1, 's', 'Trân châu trắng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `cus_id` int(11) NOT NULL,
  `point` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`cus_id`, `point`) VALUES
(1, 0),
(2, 0),
(3, 0),
(8, 0),
(9, 0),
(10, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `drink`
--

CREATE TABLE `drink` (
  `drink_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `drink`
--

INSERT INTO `drink` (`drink_id`, `name`, `price`, `description`, `type`, `image`) VALUES
(1, 'Bạc Xỉu', 30000, 'Bạc sỉu chính là \"Ly sữa trắng kèm một chút cà phê\". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.', 'coffee', 'https://product.hstatic.net/1000075078/product/1639377904_bac-siu_83abc895d7b748ecb20b45f095a0146e.jpg'),
(2, 'Bạc Xỉu Nóng', 35000, 'Bạc sỉu chính là \"Ly sữa trắng kèm một chút cà phê\". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.', 'coffee', 'https://product.hstatic.net/1000075078/product/1639377926_bacsiunong_549b1856611e41619554531f0a6212c2.jpg'),
(3, 'Cà Phê Đen Đá', 40000, 'Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.', 'coffee', 'https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_e0b2289e9c0a406b8488a7225e960a50.jpg'),
(4, 'Cà Phê Đen Nóng', 35000, 'Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.', 'coffee', 'https://product.hstatic.net/1000075078/product/1639377816_ca-phe-den-nong_cbc97f6b04a547a19524eb98695f38cd.jpg'),
(5, 'Caramel Macchiato Đá', 49000, 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.', 'coffee', 'https://product.hstatic.net/1000075078/product/caramel-macchiato_143623_d55e3cbce14942d0aff49e63f3668ace.jpg'),
(6, 'Espresso Đá', 45000, 'Một tách Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng, phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và sánh đặc.', 'coffee', 'https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_e68eefdf888443cfa1434483c32ec8ca.jpg'),
(7, 'Trà Long Nhãn Hạt Sen', 49000, 'Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.', 'tea', 'https://product.hstatic.net/1000075078/product/1649378747_tra-sen-nhan_3bdd362a971643fba012be48201f6d57.jpg'),
(8, 'Trà Hạt Sen Nóng', 55000, 'Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi thơm ngon. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối.', 'tea', 'https://product.hstatic.net/1000075078/product/tra-sen-nong_025153_dcc06a854de340679b1e5a0d146330e4.jpg'),
(9, 'Trà Sữa Sô Cô La (Nóng)', 55000, 'Trong tiết trời se lạnh, còn gì tuyệt hơn khi được nhâm nhi ly Trà Sữa Sô Cô La ấm nóng. Hương vị trà Oolong nướng quen thuộc kết hợp cùng sô cô la ngọt ngào, thêm topping marshmallow mềm mịn, cứ uống là ghiền.', 'tea', 'https://product.hstatic.net/1000075078/product/s_more_choco_8d886aa96be3428c8ebc9ecc5dcaa3cb.jpg'),
(10, 'Trà Đen Macchiato', 55000, 'Trà đen được ủ mới mỗi ngày, giữ nguyên được vị chát mạnh mẽ đặc trưng của lá trà, phủ bên trên là lớp Macchiato \"homemade\" bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo.', 'tea', 'https://product.hstatic.net/1000075078/product/tra-den-matchiato_430281_e6f452a8781d483aae7241b555ab1913.jpg'),
(11, 'Hi Tea Xoài Aloe Vera', 49000, 'Vị ngọt thanh, thơm phức từ xoài chín mọng kết hợp cùng vị chua đặc trưng của trà hoa Hibiscus tự nhiên, sẽ khiến bạn khó lòng quên được thức uống “chân ái” mùa hè này. Đặc biệt, topping Aloe Vera tự nhiên không chỉ nhâm nhi vui miệng mà còn giúp bạn “nân', 'tea', 'https://product.hstatic.net/1000075078/product/1655199358_xoai-aloe-vera_684f148fce734572bcd58267b59119e8.jpg'),
(12, 'Hi Tea Đá Tuyết Yuzu Vải', 55000, 'Vị trà hoa Hibiscus chua chua, kết hợp cùng đá tuyết Yuzu mát lạnh tái tê, thêm miếng vải căng mọng, ngọt ngào sẽ khiến bạn thích thú ngay từ lần thử đầu tiên.', 'tea', 'https://product.hstatic.net/1000075078/product/1653291175_da-tuyet-vai_25e9cb8e303a4b61999a279308faaee5.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `receiver_name` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `ship_fee` int(11) DEFAULT NULL,
  `cus_id` int(11) DEFAULT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`order_id`, `receiver_name`, `address`, `ship_fee`, `cus_id`, `status`) VALUES
(14, NULL, NULL, NULL, NULL, 'init'),
(15, NULL, NULL, NULL, NULL, 'init'),
(16, NULL, NULL, NULL, NULL, 'init'),
(17, NULL, NULL, NULL, NULL, 'init');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `replies`
--

CREATE TABLE `replies` (
  `ad_id` int(11) NOT NULL,
  `cus_id` int(11) NOT NULL,
  `comment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  UNIQUE (`username`),
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `role` enum('cus','ad') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `name`, `address`, `role`) VALUES
(1, 'manh', '123', 'Nguyễn Văn Mạnh', 'TP Thủ Đức', 'cus'),
(2, 'linh', '123', 'Nguyễn Thị Linh', 'Huyện Bình Chánh', 'cus'),
(3, 'hung', '123', 'Nguyễn Hoàng Hùng', 'Quận 1', 'cus'),
(4, 'hoang', '123', 'Nguyễn Văn Hoàng', 'Quận 3', 'ad'),
(5, 'van', '123', 'Nguyễn Hoàng Vân', 'Quận 10', 'ad'),
(6, 'vinh', '123', 'Nguyễn Hoàng Vinh', 'Quận 5', 'ad'),
(8, 'toan123', '123', 'Nguyễn Huy Toàn', 'TP Dĩ An', 'cus'),
(9, 'Lanh45', '888', 'Hoàng Lan Anh', 'Quận 5', 'cus'),
(10, 'John', '678', 'John DuDucent', 'Quận 12', 'cus');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ad_id`);

--
-- Chỉ mục cho bảng `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_id`),
  ADD KEY `ad_id` (`ad_id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`,`cus_id`),
  ADD KEY `cus_id` (`cus_id`);

--
-- Chỉ mục cho bảng `contains`
--
ALTER TABLE `contains`
  ADD PRIMARY KEY (`drink_id`,`order_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cus_id`);

--
-- Chỉ mục cho bảng `drink`
--
ALTER TABLE `drink`
  ADD PRIMARY KEY (`drink_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `cus_id` (`cus_id`);

--
-- Chỉ mục cho bảng `replies`
--
ALTER TABLE `replies`
  ADD PRIMARY KEY (`ad_id`,`cus_id`,`comment_id`),
  ADD KEY `cus_id` (`cus_id`),
  ADD KEY `comment_id` (`comment_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `article`
--
ALTER TABLE `article`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `drink`
--
ALTER TABLE `drink`
  MODIFY `drink_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`ad_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`ad_id`) REFERENCES `admin` (`ad_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`cus_id`) REFERENCES `customer` (`cus_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `contains`
--
ALTER TABLE `contains`
  ADD CONSTRAINT `contains_ibfk_1` FOREIGN KEY (`drink_id`) REFERENCES `drink` (`drink_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contains_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`cus_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cus_id`) REFERENCES `customer` (`cus_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `replies`
--
ALTER TABLE `replies`
  ADD CONSTRAINT `replies_ibfk_1` FOREIGN KEY (`ad_id`) REFERENCES `admin` (`ad_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `replies_ibfk_2` FOREIGN KEY (`cus_id`) REFERENCES `customer` (`cus_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `replies_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
