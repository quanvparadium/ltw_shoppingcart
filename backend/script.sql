DROP DATABASE IF EXISTS `shop`;
CREATE DATABASE shop;
USE `shop`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
    `book_id` int(11) NOT NULL,
    `name` varchar(100) NOT NULL, 
    `author_name` varchar(100), 
    `short_description` varchar(255) DEFAULT NULL, 
    `price` int(11) NOT NULL, 
    `discount` int(11) NOT NULL, 
    `discount_rate` int(11) NOT NULL, 
    `original_price` int(11) NOT NULL, 
    `thumbnail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `books` (`book_id`, `name`, `author_name`, `short_description`, `price`, `discount`, `discount_rate`, `original_price`, `thumbnail`) values
(75953557, 'Tâm Lý Học Về Tiền', 'Morgan Housel', 'Tiền bạc có ở khắp mọi nơi, nó ảnh hưởng đến tất cả chúng ta, và khiến phần lớn chúng ta bối rối. Mọi người nghĩ về nó theo những cách hơi khác nhau một chút. Nó mang lại những bài học có thể được áp ...', 113400, 75600, 40, 189000, 'https://salt.tikicdn.com/cache/w1200/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg'),
(167940010, 'Thao Túng Tâm Lý', 'Shannon Thomas,LCSW', 'Trong cuốn “Thao túng tâm lý”, tác giả Shannon Thomas giới thiệu đến độc giả những hiểu biết liên quan đến thao túng tâm lý và lạm dụng tiềm ẩn. “Thao túng tâm lý” là một dạng của lạm dụng tâm lý. Cũ...', 101400, 67600, 40, 169000, 'https://salt.tikicdn.com/cache/w1200/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg'),
(74021317, 'Cây Cam Ngọt Của Tôi', 'José Mauro de Vasconcelos', '“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng số một tác phẩm kinh điển của Brazil.”- Booklist“Một cách nhìn cuộc sống gần như hoàn chỉnh t...', 73800, 34200, 32, 108000, 'https://salt.tikicdn.com/cache/w1200/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg'),
(187827003, 'Không Diệt Không Sinh Đừng Sợ Hãi (TB5)', 'Thích Nhất Hạnh', 'Nhiều người trong chúng ta tin rằng cuộc đời của ta bắt đầu từ lúc chào đời và kết thúc khi ta chết. Chúng ta tin rằng chúng ta tới từ cái Không, nên khi chết chúng ta cũng không còn lại gì hết. Và ch...', 73000, 37000, 34, 110000, 'https://salt.tikicdn.com/cache/w1200/ts/product/7c/e3/95/dae5605536e6c8b9bd8073e6482b0335.jpg'),
(74362508, 'Thần Số Học Ứng Dụng', 'Joy Woodward', 'Mỗi cái tên, mỗi ngày tháng và mỗi con số đều mang những ý nghĩa riêng và có thể giúp bạn hiểu sâu sắc hơn về bản thân, các mối quan hệ và số phận của mình.Bạn có từng băn khoăn khi tình cờ nhìn thấy...', 77400, 51600, 40, 129000, 'https://salt.tikicdn.com/cache/w1200/ts/product/c8/6f/36/17e0dd709f50c7c7530755e9b21c3865.jpg'),
(46240929, 'Rèn Luyện Tư Duy Phản Biện', 'Albert Rutherford', 'Như bạn có thể thấy, chìa khóa để trở thành một người có tư duy phản biện tốt chính là sự tự nhận thức. Bạn cần phải đánh giá trung thực những điều trước đây bạn nghĩ là đúng, cũng như quá trình suy n...', 59400, 39600, 40, 99000, 'https://salt.tikicdn.com/cache/w1200/ts/product/22/cb/a9/524a27dcd45e8a13ae6eecb3dfacba7c.jpg'),
(184466860, 'Hành Tinh Của Một Kẻ Nghĩ Nhiều', 'Nguyễn Đoàn Minh Thư', '“Đó là mùa hè năm 2020, mùa hè của COVID-19 và một ngàn vạn khủng hoảng tuổi đôi mươi. Đó là mùa hè mình bắt chuyến bay sớm nhất có thể vào ngày 20 tháng 3 để chạy khỏi nước Anh đang bùng dịch, bị kẹt...', 60200, 25800, 30, 86000, 'https://salt.tikicdn.com/cache/w1200/ts/product/65/78/e7/2eacb9f887fc28779b15cf9ab6d0bf79.jpg'),
(207841114, 'Ghi Chép Pháp Y – Những Cái Chết Bí Ẩn', 'Lưu Hiểu Huy', 'GHI CHÉP PHÁP Y - NHỮNG CÁI CHẾT BÍ ẨN – Làm cách nào để một “xác chết lên tiếng”? - đó là công việc của bác sĩ pháp y.“Ghi chép pháp y - Những cái chết bí ẩn” là cuốn sách nằm trong hệ liệt với “Ph...', 97500, 52500, 35, 150000, 'https://salt.tikicdn.com/cache/w1200/ts/product/22/33/d3/601306a5216073499075360883c650fc.jpg'),
(3304875, 'Điều Kỳ Diệu Của Tiệm Tạp Hóa NAMIYA (Tái Bản)', 'Higashino Keigo', 'Điều Kỳ Diệu Của Tiệm Tạp HóaMột đêm vội vã lẩn trốn sau phi vụ khoắng đồ nhà người, Atsuya, Shota và Kouhei đã rẽ vào lánh tạm trong một căn nhà hoang bên con dốc vắng người qua lại. Căn nhà có vẻ k...', 71100, 33900, 32, 105000, 'https://salt.tikicdn.com/cache/w1200/ts/product/dd/49/7f/ab94b8b2e35c49fc38b063fae4e8266a.jpg'),
(189643105, 'Không Phải Sói Nhưng Cũng Đừng Là Cừu -Tặng kèm bookmark 2 mặt', 'Lê Bảo Ngọc', 'SÓI VÀ CỪU - BẠN KHÔNG TỐT NHƯ BẠN NGHĨ ĐÂU! Làn ranh của việc ngây thơ hay xấu xa đôi khi mỏng manh hơn bạn nghĩ. Bạn làm một việc mà mình cho là đúng, kết quả lại bị mọi người khiển trách. Bạn ủn...', 85760, 42240, 33, 128000, 'https://salt.tikicdn.com/cache/w1200/ts/product/09/2b/e4/e220a9a28a35a7c6ed3336e89c09178b.jpg'),
(214186194, 'Trí Tuệ Do Thái (Tái Bản)', 'Eran Katz', 'Trí tuệ Do Thái là một cuốn sách tư duy đầy tham vọng trong việc nâng cao khả năng tự học tập, ghi nhớ và phân tích - những điều đã khiến người Do Thái vượt trội lên, chiếm lĩnh những vị trí quan trọn...', 131356, 57644, 30, 189000, 'https://salt.tikicdn.com/cache/w1200/ts/product/98/3c/ba/35d7735dcb8e2b4bbe1c15099ccb99f4.jpg'),
(93734071, 'Trí Thông Minh Trên Giường', 'Esther Perel', 'Để trả giá cho niềm thân mật, chúng ta đánh mất khoái lạc. Ai càng thân thuộc lại càng khiến bạn khó hoang dại. Tình yêu đòi hỏi sự gần gũi, nhưng ham muốn lại cần khoảng cách.Những lý giải của Esthe...', 133800, 85200, 39, 219000, 'https://salt.tikicdn.com/cache/w1200/ts/product/0c/92/30/ad08bfc7b3da1abcec62fb08af75dc7c.jpg'),
(3954355, 'Yêu Những Điều Không Hoàn Hảo', 'Hae Min', 'Yêu Những Điều Không Hoàn HảoĐại đức Hae Min sinh ra và lớn lên tại Hàn Quốc. Sau khi hoàn thành bằng Thạc sĩ Tôn giáo học đối chiếu ở Đại học Havard và Tiến sĩ Tôn giáo học ở Đại học Princeton, ông ...', 94500, 44500, 32, 139000, 'https://salt.tikicdn.com/cache/w1200/ts/product/54/55/d6/4ceb6ba3bd81614df8ff4c1411b11f59.jpg'),
(121372698, 'NGÀI CÓC ĐI GẶP BÁC SĨ TÂM LÝ ( BÌA CỨNG)', '', 'Trong cuộc sống, chắc hẳn chúng ta cũng có những lúc phải đối mặt với bệnh trầm cảm. Điều quan trọng là mọi người sẽ đối mặt và ứng phó với căn bệnh tâm lý ấy như thế nào.Trầm cảm rất nguy hiểm và cầ...', 170000, 49000, 22, 219000, 'https://salt.tikicdn.com/cache/w1200/ts/product/ed/d7/f8/8afa9cf45d5cfafb1993782672c28c9f.png'),
(209891492, 'Những Người Hàng Xóm - Bản Thường - Bìa Mềm (Tặng kèm Bookmark + Thẻ treo)', 'Nguyễn Nhật Ánh', 'Câu chuyện đi theo lời kể của một anh chàng mới lấy vợ, chuẩn bị đi làm và có ý thích viết văn. Anh chàng yêu vợ theo cách của mình, khen ngợi sùng bái người yêu cũng theo cách của mình, nhưng nhìn cu...', 74100, 35900, 33, 110000, 'https://salt.tikicdn.com/cache/w1200/ts/product/a2/f0/e7/d7bc5cb5e12fac78066eb630a077ae95.jpg'),
(3954355, 'Yêu Những Điều Không Hoàn Hảo', 'Hae Min', 'Yêu Những Điều Không Hoàn HảoĐại đức Hae Min sinh ra và lớn lên tại Hàn Quốc. Sau khi hoàn thành bằng Thạc sĩ Tôn giáo học đối chiếu ở Đại học Havard và Tiến sĩ Tôn giáo học ở Đại học Princeton, ông ...', 87570, 51430, 37, 139000, 'https://salt.tikicdn.com/cache/w1200/ts/product/20/79/b3/8b1139ce30144b41473b199c19001942.jpg'),
(93734071, 'Trí Thông Minh Trên Giường', 'Esther Perel', 'Để trả giá cho niềm thân mật, chúng ta đánh mất khoái lạc. Ai càng thân thuộc lại càng khiến bạn khó hoang dại. Tình yêu đòi hỏi sự gần gũi, nhưng ham muốn lại cần khoảng cách.Những lý giải của Esthe...', 133800, 85200, 39, 219000, 'https://salt.tikicdn.com/cache/w1200/ts/product/0c/92/30/ad08bfc7b3da1abcec62fb08af75dc7c.jpg'),
(75953557, 'Tâm Lý Học Về Tiền', 'Morgan Housel', 'Tiền bạc có ở khắp mọi nơi, nó ảnh hưởng đến tất cả chúng ta, và khiến phần lớn chúng ta bối rối. Mọi người nghĩ về nó theo những cách hơi khác nhau một chút. Nó mang lại những bài học có thể được áp ...', 113400, 75600, 40, 189000, 'https://salt.tikicdn.com/cache/w1200/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg'),
(42230121, 'Sách Hiểu Về Trái Tim (Tái Bản 2019) - Minh Niệm', 'Minh Niệm', 'Hiểu Về Trái Tim – Cuốn Sách Mở Cửa Thề Giới Cảm Xúc Của Mỗi NgườiXuất bản lần đầu tiên vào năm 2011, Hiểu Về Trái Tim trình làng cũng lúc với kỷ lục: cuốn sách có số lượng in lần đầu lớn nhất: 100....', 125000, 33000, 21, 158000, 'https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/1b/d0/54/d9b746933e8dc26b678f19e2dad6aebe.jpg'),
(26114399, 'Nóng Giận Là Bản Năng , Tĩnh Lặng Là Bản Lĩnh', 'Tống Mặc', 'Sai lầm lớn nhất của chúng ta là đem những tật xấu, những cảm xúc tiêu cực trút bỏ lên những người xung quanh, càng là người thân càng dễ gây thương tổn.Cái gì cũng nói toạc ra, cái gì cũng bộc lộ hế...', 57850, 31150, 35, 89000, 'https://salt.tikicdn.com/cache/w1200/ts/product/70/9a/98/e6d54019a2079b9565114bce93b245b7.jpg'),
(73787185, 'Những Tù Nhân Của Địa Lý', 'Tim Marshall', '“Khi chúng ta đang vươn tới những vì sao, chính bởi những thách thức đặt ra phía trước mà chúng ta có lẽ sẽ phải chung tay để ứng phó: du hành vào vũ trụ không phải với tư cách người Nga, người Trung ...', 132300, 77700, 37, 210000, 'https://salt.tikicdn.com/cache/w1200/ts/product/8d/96/9e/c0c1f23db756d50b1944dff9c3988753.jpg'),
(199216988, 'Càng Bình Tĩnh Càng Hạnh Phúc', 'Vãn Tình', 'Càng bình tĩnh Càng hạnh phúcTiếp nối thành công rực rỡ của Bạn đắt giá bao nhiêu?, Khí chất bao nhiêu hạnh phúc bấy nhiêu, Không sợ chậm chỉ sợ dừng,… Vãn Tình đã quay trở lại cùng cuốn sách Càng bì...', 110000, 0, 0, 110000, 'https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/ee/ec/a5/a1aee3b408f60d530239eeeb6c8720d9.jpg'),
(49960438, 'Súng, Vi Trùng Và Thép (Tái Bản 2020)', 'Jared Diamond,Jared Diamond ', '"Bàn tay của diễn trình lịch sử từ 8.000 năm trước vẫn đang đè nặng lên chúng ta." Cuốn sách giải thích vì sao các nền văn minh Á – Âu (bao gồm cả Bắc Phi) lại tồn tại được, cũng như đã chinh phục các...', 269500, 0, 0, 269500, 'https://salt.tikicdn.com/cache/w1200/ts/product/fe/b2/11/255cf919ed7a9291b92fcf3e74be03b0.jpg'),
(52584834, 'Tư Duy Hệ Thống Trong Công Việc', 'Steven Schuster', 'TƯ DUY HỆ THỐNG TRONG CÔNG VIỆC\xa0Khi đối mặt với những vấn đề phức tạp, chúng ta không thể giải quyết chúng bằng kiểu suy nghĩ lối mòn, nước đến chân mới nhảy, mù quáng đâm đầu vào sự vụ Nếu bạn muốn ...', 57400, 31600, 36, 89000, 'https://salt.tikicdn.com/cache/w1200/ts/product/22/f5/04/eca46d6836c0f9c467c25996e89cd225.jpg'),
(69162891, 'Mang Thai Sinh Nở Và Nuôi Con Khỏe Mạnh  Cuốn Sách Về Mang Thai Được Tìm Kiếm Nhiều Nhất Tại Hàn Quốc', 'Kim Geon Oh', 'Mang Thai Sinh Nở Và Nuôi Con Khỏe Mạnh Cuốn sách về mang thai được tìm kiếm nhiều nhất tại Hàn Quốc.Tất cả những kiến thức chuẩn mực nhất về mang thai sinh nở, nuôi con mà các bác sĩ chuyên khoa s...', 172000, 93000, 35, 265000, 'https://salt.tikicdn.com/cache/w1200/ts/product/2b/ac/d0/3cb4817d1ccd949f535b6486c3c17180.jpg'),
(147920903, 'Một Thoáng Ta Rực Rỡ Ở Nhân Gian', '', '“Vuong thực sự có thiên tài quan sát.” The New York Times“Với một xuất thân bên rìa hết sức xa lạ, Vuong đã viết nên một tác phẩm trữ tình về quá trình tự khám phá chính mình, vừa thành thật đến choá...', 85050, 49950, 37, 135000, 'https://salt.tikicdn.com/cache/w1200/ts/product/2f/b5/4e/a8208e9019c8510e8a8eebe06f50299c.jpg'),
(117254517, 'Đại Dương Đen - Những Câu Chuyện Từ Thế Giới Của Trầm Cảm', 'Đặng Hoàng Giang', '“Tôi sợ những cơn của mình, chúng xâm chiếm não bộ tôi, nhấn chìm lý trí của tôi, chúng phơi bày sự đau đớn, cô đơn, nỗi sầu thảm suốt những năm tháng niên thiếu của tôi, sự ám ảnh của bạo lực, của lẻ...', 158000, 82000, 34, 240000, 'https://salt.tikicdn.com/cache/w1200/ts/product/f7/fb/9a/e8b9a94478dc887c4b84b6b6439f6335.jpg'),
(121635152, 'Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép (Tặng Kèm 1 Bộ Bookmark Gồm 4 Cái)', 'Yoo Eun Jung', 'KHÔNG AI CÓ THỂ LÀM BẠN TỔN THƯƠNG TRỪ KHI BẠN CHO PHÉP – YOO EUN JUNGChúng ta vẫn thường nghĩ mình sẽ chỉ hạnh phúc khi ở bên cạnh ai đó và nhận được yêu thương từ họ. Nhưng thực chất, hạnh phúc đơn...', 77350, 41650, 35, 119000, 'https://salt.tikicdn.com/cache/w1200/ts/product/0c/ff/1f/091c739d2cc4c1b2a3a9c5025930adcc.jpg'),
(206840682, 'Quyền Lực Của Địa Lý - The Power Of Geography', 'Tim Marshall', 'Tim Marshall đã nhận xét rất xác đáng rằng: "Các đế chế nổi lên rồi suy tàn. Các liên minh hình thành rồi tan rã. Thời kỳ hòa bình ở châu Âu sau các cuộc chiến của Napoleon kéo dài khoảng sáu mươi năm...', 201000, 79000, 28, 280000, 'https://salt.tikicdn.com/cache/w1200/ts/product/6c/87/e7/db72a8050a15d86d8102cd21ab1d8b11.jpg'),
(198414891, 'Hồ Sơ Tâm Lý Học Tâm Thần Hay Kẻ Điên', 'Mục Qua', 'HỒ SƠ TÂM LÝ HỌC - T M THẦN HAY KẺ ĐIÊN - Điều gì đang xảy ra trong thế giới của những kẻ tâm thần“Có lúc, chúng ta gọi bệnh tâm thần là bệnh cố chấp, các bệnh nhân đều cố chấp sống trong thế giới kì...', 122850, 66150, 35, 189000, 'https://salt.tikicdn.com/cache/w1200/ts/product/b6/cc/43/417fff5c81892a67abff253f5bbd8104.jpg'),
(87226756, 'Những Đêm Không Ngủ, Những Ngày Chậm Trôi', 'A Crazy Mind team', 'NHỮNG ĐÊM KHÔNG NGỦ NHỮNG NGÀY CHẬM TRÔI - A CRAZY MIND“Những đêm không ngủ, những ngày chậm trôi” đại diện cho một hành tinh mới - nơi nỗi đau tinh thần được đưa ra ánh sáng và chữa lành.Cuốn sách ...', 55900, 30100, 35, 86000, 'https://salt.tikicdn.com/cache/w1200/ts/product/a8/e9/36/94bb68f3b55bb93a593fec97c087915f.jpg'),
(111285062, 'Đắc Nhân Tâm (Bìa Mềm)(Tái Bản)', 'Dale Carnegie', 'Đắc nhân tâm của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở h...', 56100, 29900, 35, 86000, 'https://salt.tikicdn.com/cache/w1200/ts/product/6a/da/bb/185d27fe442a1668cf0196c1b82c87eb.jpg'),
(1476937, 'Dám Bị Ghét', 'Koga Fumitake,Kishimi Ichiro', 'Dám Bị GhétCác mối quan hệ xã hội thật mệt mỏi.Cuộc sống sao mà nhạt nhẽo và vô nghĩa.Bản thân mình xấu xí và kém cỏi.Quá khứ đầy buồn đau còn tương lai thì mờ mịt.Yêu cầu của người khác thật khắ...', 60480, 35520, 37, 96000, 'https://salt.tikicdn.com/cache/w1200/ts/product/56/2b/02/b11492bbd183a4fe062bd39ef3c53095.jpg'),
(188940817, 'Vị Thần Của Những Quyết Định', 'Universe', 'Không có gì là ngẫu nhiên. Mọi chuyện đều là tất nhiên.Một cuốn sách tâm linh giúp bạn giải quyết những vấn đề trong cuộc sống, công việc, tình cảm… Nếu bạn đang phân vân trước những lựa chọn, nếu b...', 55300, 23700, 30, 79000, 'https://salt.tikicdn.com/cache/w1200/ts/product/16/03/26/5cb2991cc6a258b7c1cc07105bccaa29.jpg'),
(52788072, 'Chiến Binh Cầu Vồng (Tái Bản 2020)', 'Andrea Hirata', 'Chiến Binh Cầu Vồng (Tái Bản 2020)Một tác phẩm có tầm ảnh hưởng sâu rộng nhất Indonesia“Thầy Harfan và cô Mus nghèo khổ đã mang đến cho tôi tuổi thơ đẹp nhất, tình bạn đẹp nhất, và tâm hồn phong phú,...', 68670, 40330, 37, 109000, 'https://salt.tikicdn.com/cache/w1200/ts/product/a1/ef/4f/0b39e40dca3827604c8bc4e867cc9423.jpg'),
(142002263, 'Muôn Kiếp Nhân Sinh 2 (Bìa Cứng)', 'Nguyên Phong', 'CUỐN SÁCH CỦA NHỮNG CÁNH BƯỚM RUNG ĐỘNGTác phẩm Muôn Kiếp Nhân Sinh tập 1 của tác giả Nguyên Phong xuất bản giữa tâm điểm của đại dịch đã thực sự tạo nên một hiện tượng xuất bản hiếm có ở Việt Nam. C...', 234000, 104000, 31, 338000, 'https://salt.tikicdn.com/cache/w1200/ts/product/a9/a3/87/41910b2e14d1551785b2068c95d9ef26.jpg'),
(57325187, 'Sách Người Giàu Có Nhất Thành Babylon (Tái Bản 2020)', 'GEORGE SAMUEL CLASON', 'NGƯỜI GIÀU CÓ NHẤT THÀNH BABYLONNgười giàu có nhất thành Babylon (tiếng Anh: The Richest Man in Babylon) được xem là một trong những tác phẩm truyền cảm hứng lớn nhất về chủ đề tiết kiệm, kế hoạch tài...', 60800, 37200, 38, 98000, 'https://salt.tikicdn.com/cache/w1200/ts/product/23/f8/75/5e90d6e0eabaebd068c815cf1c1f7396.jpg'),
(143217512, 'Điềm Tĩnh\xa0Và\xa0Nóng Giận', 'Tạ Quốc Kế', 'Trong cuộc sống thường ngày, chúng ta thường nổi giận vì nhiều nguyên do: công việc không suôn sẻ, chúng ta tức giận; bị người khác hiểu nhầm, chúng ta tức giận; thấy việc chướng tai gai mắt, chúng ta...', 67200, 28800, 30, 96000, 'https://salt.tikicdn.com/cache/w1200/ts/product/60/f4/d1/0675631bc561ba2ffe709475cfab8728.jpg'),
(204078065, 'Thuật Thao Túng - Góc Tối Ẩn Sau Mỗi Câu Nói', 'Wladislaw Jachtchenko', 'Bạn có muốn giành phần thắng cuối cùng trong các cuộc tranh luận?Bạn có muốn dẹp đi bộ mặt kiêu ngạo của các đồng nghiệp xung quanh mình?Bạn có muốn chứng minh rằng bạn đã đúng về mọi thứ?Đây là qu...', 90350, 48650, 35, 139000, 'https://salt.tikicdn.com/cache/w1200/ts/product/c9/96/c0/2c22f84356f7e57bfc85a851b337327d.jpg'),
(213704979, 'Ma Quỷ Dân Gian Ký', 'Duy Văn', '“MA QUỶ DÂN GIAN KÝ” - KHI MA QUỶ VIỆT NAM CHÍNH THỨC ĐƯỢC ĐƯA VÀO TRANG SÁCH Cuốn sách “Ma quỷ dân gian ký” là một trong số ít những công trình hiếm hoi đề cập đến những câu chuyện về ma quỷ được tr...', 172700, 95300, 36, 268000, 'https://salt.tikicdn.com/cache/w1200/ts/product/9e/eb/cf/a425cb10fe048e3b7ba2d47e9f12f930.png'),
(56878836, 'Sách Muôn Kiếp Nhân Sinh (Bìa Cứng) - Nguyên Phong', 'Nguyên Phong', 'MUÔN KIẾP NHÂN SINH - MANY LIVES, MANY TIMESGiáo sư John Vũ – Nguyên Phong và những câu chuyện chưa từng có về tiền kiếp, khám phá luật Nhân quả, Luân hồi.“Muôn kiếp nhân sinh” là tác phẩm do Giáo s...', 171000, 57000, 25, 228000, 'https://salt.tikicdn.com/cache/w1200/ts/product/37/ee/9d/fda3088df9dde40c113b584616ae1b76.jpg'),
(68585576, 'Càng Kỷ Luật, Càng Tự Do', 'Ca Tây', 'KỶ LUẬT vốn là ván cờ bạn phải tự đấu với chính mình. Thắng - bạn sẽ có được “bản năng của người mạnh mẽ nhất”, đó là sự tự kiểm soát bản thân. Thua - bạn mãi sống trong cảm giác tạm bợ, nuối tiếc. Cà...', 76300, 32700, 30, 109000, 'https://salt.tikicdn.com/cache/w1200/ts/product/25/c4/75/73b6578834e8aa8e5e071b64fab93d5d.jpg'),
(147999778, 'Không Bao Giờ Là Thất Bại - Tất Cả Là Thử Thách (Ấn Bản Cập Nhật Đầy Đủ Nhất)(Bìa Cứng)', 'Chung Ju Yung', '“KHÔNG BAO GIỜ LÀ THẤT BẠI! TẤT CẢ LÀ THỬ THÁCH”Tự truyện nổi tiếng của gã khổng lồ trong nền kinh tế Hàn Quốc - cố Chủ tịch tập đoàn Hyundai Chung Ju-yungThất bại xảy ra là để con người nhận ra sức...', 154000, 114000, 43, 268000, 'https://salt.tikicdn.com/cache/w1200/ts/product/b9/bb/cf/b9c3cb0e86596f31e2bd7ab37174a226.jpg'),
(54422942, 'Tôi Quyết Định Sống Cho Chính Tôi (Tái Bản 2020)', 'Kim Suhyun', 'Cuốn sách đạt giải thưởng “Cuốn sách của năm” tại Hàn Quốc vào năm 2017.   Đã tái bản hơn 100 lần kể từ lần xuất bản đầu tiên vào năm 2016.   Được nhiều nghệ sĩ chọn đọc và giới thiệu đến các fan củ...', 62100, 25900, 29, 88000, 'https://salt.tikicdn.com/cache/w1200/ts/product/65/08/87/cb07a056cf783f24bb833c983a6941a1.jpg'),
(114937969, 'Rừng Nauy (Tái Bản)', 'Haruki Murakami', 'Câu chuyện bắt đầu từ một chuyến bay trong ngày mưa ảm đạm, một người đàn ông 37 tuổi chợt nghe thấy bài hát gắn liền với hình ảnh người yêu cũ, thế là quá khứ ùa về xâm chiếm thực tại. Mười tám năm t...', 94500, 55500, 37, 150000, 'https://salt.tikicdn.com/cache/w1200/ts/product/65/1f/41/28eeabed8bb8877effcd00448e775382.jpg'),
(8885995, 'Sự Im Lặng Của Bầy Cừu (Tái Bản)', 'Thomas Harris', 'Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham thích trò đùa trí tuệ, những tiết lộ nửa chừng hắn chỉ dành cho kẻ nào thông minh, những cái nhìn xuyên thấu thân phận và suy tư của cô mà đôi kh...', 72450, 42550, 37, 115000, 'https://salt.tikicdn.com/cache/w1200/ts/product/cd/2a/5b/926ca6c7b295c6e7cea39390efe08968.jpg'),
(69764541, 'Tâm Lý Học Hành Vi (Tặng Kèm 1 Bookmark )', 'Khương Nguy', 'Tâm Lý Học Hành ViCuốn sách giúp bạn thấu hiểu bản thân mình và tâm lý những người xung quanh!Được chấp bút bởi bậc thầy tâm lý hàng đầu Trung Quốc Khương Nguy.Tâm lý học theo chủ nghĩa hành vi phát...', 63700, 34300, 35, 98000, 'https://salt.tikicdn.com/cache/w1200/ts/product/50/bd/eb/51937df1d205a27deb93bde1dda06f05.jpg'),
(13419678, 'Sách Đi Tìm Lẽ Sống (Tái Bản )', 'Viktor Emil Frankl', 'Đi Tìm Lẽ SốngĐi tìm lẽ sống\xa0của\xa0Viktor Frankl\xa0là một trong những quyển sách kinh điển của thời đại. Thông thường, nếu một quyển sách chỉ có một đoạn văn, một ý tưởng có sức mạnh thay đổi cuộc sống c...', 54600, 33400, 38, 88000, 'https://salt.tikicdn.com/cache/w1200/ts/product/80/14/8b/61fb657f347d14d9d7bf6fe901001a8e.jpg'),
(17336364, 'Phía Sau Nghi Can X (Tái Bản 2019)', 'Higashino Keigo', '“Việc nghĩ ra một bài toán vô cùng khó và việc giải bài toán đó, việc nào khó hơn?”Khi nhấn chuông cửa nhà nghi can chính của một vụ án mới, điều tra viên Kusanagi không biết rằng anh sắp phải đương ...', 68670, 40330, 37, 109000, 'https://salt.tikicdn.com/cache/w1200/ts/product/23/56/86/a538698ead7dc2f693d1e9778417317d.jpg'),
(106318762, 'Sách ID Tiếng ANh cho người mới bắt đầu- Cô Trang Anh', 'Trang Anh', 'Sách Tiếng Anh Cho Người Mất Gốc Cô Trang Anh:- Học ngữ pháp từ con số 0.- Hiểu tiếng anh theo cách đơn giản nhất.- Đầy đủ 4 kỹ năng: Nghe - Nói - Đọc - Viết.- Học giao tiếp theo chuyên đề ngữ...', 159000, 41000, 21, 200000, 'https://salt.tikicdn.com/cache/w1200/ts/product/34/18/9d/c607f01d9da32a0319b125af042ab410.jpg'),
(140416370, 'Dòng Chảy', 'Mihaly Csikszentmihalyi', '“FLOW - DÒNG CHẢY”Dành cho những ai muốn tối ưu khả năng tập trung để tìm kiếm sự gắn kết trong công việc, hướng đến sự viên mãn, và hạnh phúc trong mọi trải nghiệm cuộc sống.Có bao giờ bạn hoàn toà...', 141400, 86600, 38, 228000, 'https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/b8/97/4f/b3858b9d285701420eaebb6dba56beaf.jpg'),
(85763211, 'Hãy Khiến Tương Lai Biết Ơn Vì Hiện Tại Bạn Đã Cố Gắng Hết Mình (Tặng Kèm: 01 Bookmark)', 'Bạch Tô', 'Cuốn sách dành cho những bạn trẻ chênh vênh và đầy hoang mang nhưng không ngừng theo đuổi sự nỗ lựcTừng được đón đọc bởi 1 triệu độc giả khắp Trung Quốc, 4 chương sách tổng hợp 50 lời khuyên chất lượ...', 64350, 34650, 35, 99000, 'https://salt.tikicdn.com/cache/w1200/ts/product/27/90/2a/5d2070e57aebb105e1dd18b636cd92e4.jpg'),
(161008717, 'Kiếp Nào Ta Cũng Tìm Thấy Nhau: Câu Chuyện Về Những Linh Hồn Tri Kỷ Vĩnh Viễn Không Chia Lìa (Tái Bản)', 'Brian L Weiss', 'Kiếp nào ta cũng tìm thấy nhau là cuốn sách thứ ba của Brain L. Weiss – một nhà tâm thần học có tiếng. Trước đó ông đã viết hai cuốn sách: cuốn đầu tiên là Ám ảnh từ kiếp trước, cuốn sách mô tả câu ch...', 70000, 29000, 29, 99000, 'https://salt.tikicdn.com/cache/w1200/ts/product/6e/55/77/a0a404fb849d8af3ab4a0f6fe636c329.png'),
(19792256, 'Chuyện Con Mèo Dạy Hải Âu Bay (Tái Bản 2019)', 'Luis Sepulveda', 'Cô hải âu Kengah bị nhấn chìm trong váng dầu – thứ chất thải nguy hiểm mà những con người xấu xa bí mật đổ ra đại dương. Với nỗ lực đầy tuyệt vọng, cô bay vào bến cảng Hamburg và rơi xuống ban công củ...', 31850, 17150, 35, 49000, 'https://salt.tikicdn.com/cache/w1200/ts/product/33/75/0c/53681da20bb737887e1177d9aa438a50.jpg'),
(124767703, 'Cân Bằng Cảm Xúc Cả Lúc Bão Giông (Tặng Kèm Bookmark)(Tái Bản)', 'Richard Nicholls', 'Một ngày, chúng ta có khoảng 16 tiếng tiếp xúc với con người, công việc, các nguồn thông tin từ mạng xã hội, loa đài báo giấy… Việc này mang đến cho bạn vô vàn cảm xúc, cả tiêu cực lẫn tích cực.Bạn c...', 68250, 36750, 35, 105000, 'https://salt.tikicdn.com/cache/w1200/ts/product/3d/a0/f5/d3b2bed567052d00e50c8ff36de7eedc.jpg'),
(3639597, 'Bước Chậm Lại Giữa Thế Gian Vội Vã (Tái Bản)', 'Hae Min', 'Bước Chậm Lại Giữa Thế Gian Vội Vã (Tái Bản)Chen vai thích cánh để có một chỗ bám trên xe buýt giờ đi làm, nhích từng xentimét bánh xe trên đường lúc tan sở, quay cuồng với thi cử và tiến độ công việ...', 53550, 31450, 37, 85000, 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/18/8e/2f70de3ea7eec9c34f55e402254e27ed.jpg'),
(66619715, 'Sách Vị Tu Sĩ Bán Chiếc Ferrari (Tái Bản)', 'Robin Sharma', 'VỊ Tu Sĩ Bán Chiếc FERRARI không phải là một cuốn sách xa lạ, cuốn sách này là một trong những ấn phẩm kinh điển của thế giới về đề tài truyền cảm hứng, theo đuổi lý tưởng sống, và hướng về một cuộc s...', 72700, 25300, 26, 98000, 'https://salt.tikicdn.com/cache/w1200/ts/product/78/97/9e/09dc123679ecd939271fe9a4ee4cb841.jpg'),
(157240665, 'Ra Bờ Suối Ngắm Hoa Kèn Hồng (Truyện Dài-Nguyễn Nhật Ánh) - Bìa Mềm (Màu Hồng) (Tặng Kèm Bookmark Bồi Hai Mặt, Thiệp Trái Tim In Bài Thơ Của Tác Giả)', 'Nguyễn Nhật Ánh', 'Ra bờ suối ngắm hoa kèn hồng là tác phẩm trong trẻo, tràn đầy tình yêu thương mát lành, trải ra trước mắt người đọc khu vườn trại rực rỡ cỏ hoa của vùng quê thanh bình, kèm theo đó là những “nhân vật”...', 105850, 39150, 27, 145000, 'https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/53/84/62/1e666675e16e7a998ff5f9904175f192.jpg'),
(97594364, 'Luật Tâm Thức - Giải Mã Ma Trận Vũ Trụ', 'Ngô Sa Thạch', 'Dịch bệnh, thiên tai, chiến tranh… có phải là lời cảnh cáo của tự nhiên đến con người?“Biến đổi khí hậu” là một nước đi chính trị hay chỉ là sự thay đổi của Trái Đất theo chu kỳ?UFO, người ngoài hàn...', 204399, 87601, 30, 292000, 'https://salt.tikicdn.com/cache/w1200/ts/product/72/cb/a0/287ff7a5cde1f1ab6bd3dbcab28494e4.jpg'),
(72882553, 'Kỷ Luật Tự Giác (Tặng Kèm Bookmark )', 'Tiểu Dã', 'TỰ GIÁC BAO NHIÊU, TỰ DO BẤY NHIÊUTheo bạn thì, thế nào là tự do?Là có thể nằm ườn trên ghế sô pha xem phim, ôm điện thoại lướt mạng cả ngày?Hay là được ăn thoải mái các thể loại đồ ăn nhanh, trà sữ...', 54600, 29400, 35, 84000, 'https://salt.tikicdn.com/cache/w1200/ts/product/27/2e/63/308986aa2c17293af227162874ad24a3.jpg'),
(3638033, 'Trăm Năm Cô Đơn', 'Gabriel Garcia Marquez', 'Trăm Năm Cô Đơn“Chỉ với một bước nhảy, Gabriel García Márquez đã vụt lên ngang hàng với Günter Grass và Vladimir Nabokov.”- The New York Times“Xuất sắc, hỗn độn, với tầm ảnh hưởng lớn ảnh…\xa0 Một thi...', 106470, 62530, 37, 169000, 'https://salt.tikicdn.com/cache/w1200/ts/product/37/3b/5d/5efd681d48d5a81e3e6675121e69d38d.jpg'),
(173882437, '8 Vụ Án Hoàn Hảo - Vạch Trần Tâm Lý Kẻ Phạm Tội', 'Peter Swanson', '“Khi một vụ ết người cụ thể được ẩn giấu trong một chuỗi những vụ án khác để mọi thứ trông như tác phẩm của một kẻ cuồng s.át tâm thần…” Vài năm về trước, Malcolm Kershaw là một nhân viên bán sách, n...', 101500, 43500, 30, 145000, 'https://salt.tikicdn.com/cache/w1200/ts/product/63/35/7c/135f47dd94bd9373af10f2802a144d23.jpg'),
(113530805, 'Tuổi Trẻ Đáng Giá Bao Nhiêu (Tái Bản)', 'Rosie Nguyễn', '“Bạn hối tiếc vì không nắm bắt lấy một cơ hội nào đó, chẳng có ai phải mất ngủ.Bạn trải qua những ngày tháng nhạt nhẽo với công việc bạn căm ghét, người ta chẳng hề bận lòng.Bạn có chết mòn nơi xó t...', 56700, 33300, 37, 90000, 'https://salt.tikicdn.com/cache/w1200/ts/product/56/ce/23/64b2eaa5b859d8ba1412f1b350c3e128.jpg'),
(92859698, 'Tâm Lý Học Biểu Cảm', 'Mã Hạo Thiên', 'TÂM LÝ HỌC BIỂU CẢMCuốn sách dạy bạn cách nhìn thấu người khác một cách rõ ràng nhất và chân thực nhấtTừ gương mặt đến bước chân, từ ngôn ngữ đến cơ thể, từ biểu cảm bên ngoài đến nội tâm bên trong....', 63700, 34300, 35, 98000, 'https://salt.tikicdn.com/cache/w1200/ts/product/93/f2/e6/730bd2d3a52f6254801e5fa71d0e8122.jpg'),
(10095276, 'Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người Nhật', 'Ken Mogi', 'IKIGAI là tập hợp nhiều câu chuyện đời, chuyện nghề giản dị, lý giải tường minh năm điều cốt lõi của\xa0ikigai\xa0–triết lý sống mang lại hạnh phúc và trường thọ của người Nhật:Bắt đầu từ những việc nhỏ nh...', 56700, 33300, 37, 90000, 'https://salt.tikicdn.com/cache/w1200/ts/product/0c/ae/23/74a7396a4c1bcf48ed016b92ab349b5a.jpg'),
(193206168, 'Quán Cơm Tỳ Hưu Chỉ Có Vào Không Có Ra (Combo 2 cuốn)', 'Hải Kinh Lạc', 'Quán Cơm Tỳ Hưu Chỉ Có Vào Không Có Ra (Combo 2 cuốn)Tập 1Lão yêu quái Tỳ Hưu ra ngoài vứt rác, rác thì vứt vào thùng, quỷ nam lại rơi vào lòng.Quỷ nam Văn Hi xinh đẹp như hoa, thơm mềm mát lạnh, v...', 203000, 116000, 36, 319000, 'https://salt.tikicdn.com/cache/w1200/ts/product/59/04/58/885ba4f80c4aa3947fb5360f95dd70ea.jpg'),
(207301603, 'Thiên Quan Tứ Phúc - Tập 7', 'Mặc Hương Đồng Khứu', 'Trong lúc nguy nan, bốn võ thần hóa kiếm tương trợ. Gặp người xưa những tưởng kẻ thù ấy vậy mà Tạ Liên lại không ngờ đến, kẻ thù lại là người mình tin tưởng nhất. Bức màn bí mật từ từ hé lộ, Quỷ vươn...', 127000, 32000, 20, 159000, 'https://salt.tikicdn.com/cache/w1200/ts/product/00/c0/49/2af653b18bb8dd7992e721223d668b08.jpg'),
(215141307, 'Người dọn dẹp hiện trường án mạng', 'Lư Lạp Lạp', '“Người dọn dẹp hiện trường án mạng” - Góc khuất đằng sau nghề dọn dẹp hiện trường vụ án: đầy tính nhân văn nhưng cũng hết sức thảm khốc.Nhiệm vụ của những nhân viên dọn dẹp hiện trường là làm sạch và...', 69400, 24600, 26, 94000, 'https://salt.tikicdn.com/cache/w1200/ts/product/94/da/c2/a13467e7c6592841e5c645a2b30d5a7d.jpg'),
(72459686, 'How Psychology Works - Hiểu Hết Về Tâm Lý Học', 'Jo Hemmings', 'MỘT TRONG NHỮNG CUỐN SÁCH MỞ KHÓA HỮU ÍCH NHẤT VỀ TƯ DUY, KÝ ỨC VÀ CẢM XÚC CỦA CON NGƯỜI!Ám sợ là gì, ám sợ có thực sự đáng sợ không? Rối loạn tâm lý là gì, làm thế nào để thoát khỏi tình trạng suy n...', 186000, 114000, 38, 300000, 'https://salt.tikicdn.com/cache/w1200/ts/product/2b/84/ff/cb34637573525a998596b58d6939411e.jpg'),
(104741661, 'Combo 2 Tập : 999 Lá Thư Gửi Cho Chính Mình (Tái Bản)', 'Miêu Công Tử', '“999 lá thư gửi cho chính mình” là một tác phẩm đặc biệt đầy cảm hứng đến từ tác giả văn học mạng nổi tiếng Miêu Công Tử, mang một màu sắc riêng biệt qua những lời thư nhỏ nhắn nhủ đến người đọc về gi...', 180600, 77400, 30, 258000, 'https://salt.tikicdn.com/cache/w1200/ts/product/ad/9f/76/3f8c8015358ad374aa55c2cb8048eae1.jpg'),
(8885999, 'Totto - Chan Bên Cửa Sổ (Tái Bản)', 'Kuroyanagi Tetsuko', 'Không còn cách nào khác, mẹ đành đưa Totto-chan đến một ngôi trường mới, trường Tomoe. Đấy là một ngôi trường kỳ lạ, lớp học thì ở trong toa xe điện cũ, học sinh thì được thoả thích thay đổi chỗ ngồi ...', 61740, 36260, 37, 98000, 'https://salt.tikicdn.com/cache/w1200/ts/product/24/39/01/1718d16b33315c03026cee717adad4b3.jpg'),
(10005245, 'Đàn Ông Sao Hỏa Đàn Bà Sao Kim', 'John Gray', 'Hiểu biết về giới tính giúp chúng ta thêm khoan dung và biết tha thứ khi ai đó không đáp lại theo cách mà ta mong đợiTình chỉ đẹp khi còn dang dở Cưới nhau về nham nhở lắm em ơ\xa0Bởi kết hôn không ph...', 114000, 74000, 39, 188000, 'https://salt.tikicdn.com/cache/w1200/ts/product/bc/66/9a/f507bd36cf01fbc02948f3d01baeb627.jpg'),
(11368965, 'Combo Giáo Trình Chuẩn HSK 1 - Bài Học (Kèm 1 MP3) và Giáo Trình Chuẩn HSK 1 - Bài Tập (Kèm 1 MP3) ( Tặng Kèm Viết )', 'Khương Lệ Bình', 'Combo Giáo Trình Chuẩn HSK 1 - Bài Học (Kèm\xa0 MP3) và Giáo Trình Chuẩn HSK 1 - Bài Tập (Kèm\xa0 MP3) ( Tặng Kèm Viết )Bản đặc biệt tặng kèm bút BTS , Mẫu ngẫu nhiên và số lượng có hạn.Lưu ý: quét mã QR ...', 284800, 71200, 20, 356000, 'https://salt.tikicdn.com/cache/w1200/ts/product/9b/3c/2b/89464204b485d0f8eea7073736769eef.jpg'),
(210277880, 'Con người và Biểu tượng - Man and his symbols', 'Carl Gustav Jung', 'CON NGƯỜI VÀ BIỂU TƯỢNG là tác phẩm đầu tiên và duy nhất trong đó Carl Gustav Jung giải thích cho độc giả phổ thông đóng góp lớn nhất của ông cho hiểu biết về tâm trí con người: lý thuyết về tầm quan ...', 305000, 145000, 32, 450000, 'https://salt.tikicdn.com/cache/w1200/ts/product/ae/f6/58/f4e12505bab2566b2f3f2d9622203e5d.jpg'),
(70016692, 'Bắt Trẻ Đồng Xanh (Tái Bản 2020)', 'Jerome David Salinger', 'Sơ lược về tác phẩmHolden Caulfield, 17 tuổi, đã từng bị đuổi học khỏi ba trường, và trường dự bị đại học Pencey Prep là ngôi trường thứ tư. Và rồi cậu lại trượt 4 trên 5 môn học và nhận được thông b...', 57200, 30800, 35, 88000, 'https://salt.tikicdn.com/cache/w1200/ts/product/65/74/fb/1e6ca7a2fa28d83667a8e50144e43d0d.jpg'),
(126743459, 'Fear - Sợ Hãi (Hóa Giải Sợ Hãi Bằng Tình Thương)', 'Thích Nhất Hạnh', 'Hầu hết chúng ta ai cũng đã trải qua những giây phút hạnh phúc lẫn khó khăn trong cuộc sống. Tuy nhiên có nhiều người ngay lúc đang vui sướng nhất mà lòng vẫn trĩu nặng lo sợ, sợ ngày vui sẽ qua mau, ...', 67600, 41400, 38, 109000, 'https://salt.tikicdn.com/cache/w1200/ts/product/63/30/9e/cacc0e688cb82558f93f1710ac36ca7c.jpg'),
(162844699, 'Tạm Biệt Tôi Của Nhiều Năm Về Trước', 'An', 'Dành tặng bạn, những người muốn buông bỏ những “điều đã cũ” nhưng chưa đủcan đảm.Dành tặng những ai đang khao khát được “chạm vào”, được vỗ về và thấu hiểu.Dành tặng cho tất cả chúng ta, trong nhữn...', 66500, 28500, 30, 95000, 'https://salt.tikicdn.com/cache/w1200/ts/product/ff/29/2a/737786f6fa821f9535b94420b0855609.jpg'),
(111580006, 'Sách Muôn Kiếp Nhân Sinh 2 (Khổ Nhỏ) - Nguyên Phong', 'Nguyên Phong', 'CUỐN SÁCH CỦA NHỮNG CÁNH BƯỚM RUNG ĐỘNGTác phẩm Muôn Kiếp Nhân Sinh tập 1 của tác giả Nguyên Phong xuất bản giữa tâm điểm của đại dịch đã thực sự tạo nên một hiện tượng xuất bản hiếm có ở Việt Nam. C...', 103000, 45000, 30, 148000, 'https://salt.tikicdn.com/cache/w1200/ts/product/63/8f/a1/f03610f3b5343e5b94b0c95b1dd420d1.jpg'),
(3241171, 'Hai Số Phận (Tái Bản)', 'Jeffrey Archer', 'Hai Số Phận (Tái Bản)\xa0Hai đứa Kane và Abel sinh ra cùng một ngày, một giờ, ở hai xứ sở hoàn toàn xa lạ. Người giàu sang, kẻ khốn khó nhưng họ giống nhau đến kỳ lạ, đều có tham vọng và nghị lực phi th...', 115000, 40000, 26, 155000, 'https://salt.tikicdn.com/cache/w1200/ts/product/60/4d/ed/182ccc9624d6f45af703faeba2cc8d54.jpg'),
(77774625, 'Nghệ Thuật Tập Trung - Nâng Cao Năng Suất, Tối Ưu Thời Gian, Hiệu Quả Bất Ngờ', 'Nhà tâm thần học DaiGo', 'NGHỆ THUẬT TẬP TRUNG – BÍ QUYẾT NÂNG CAO NĂNG SUẤT, TỐI ƯU THỜI GIAN, HIỆU QUẢ BẤT NGỜNgày còn đi học, bạn quyết tâm học bài xong mới nghỉ ngơi xem tivi, nhưng chỉ cần nhạc hiệu chương trình yêu thíc...', 61380, 37620, 38, 99000, 'https://salt.tikicdn.com/cache/w1200/ts/product/54/bd/9c/0bbe884b7f99a5b36435a3bf8a3402ee.jpg'),
(204317934, '1111 - Nhật Ký Sáu Vạn Dặm Trên Yên Xe Cà Tàng', 'Trần Đặng Đăng Khoa', 'Trần Đặng Đăng Khoa bắt đầu hành trình vạn dặm vòng quanh thế giới từ ngày 01/06/2017 tại cửa khẩu Mộc Bài (Tây Ninh). Với chiếc xe 100cc mang biển số Việt Nam, trong hành trình kéo dài 1.111 ngày, an...', 247000, 78000, 24, 325000, 'https://salt.tikicdn.com/cache/w1200/ts/product/16/99/f6/b1b3d72f9802de5ae8ae20d641fd1e63.jpg'),
(197629362, 'Bức Họa Múa Rối Xương (Combo tập 1+2', 'Tây Tử Tự', 'Bức Họa Múa Rối Xương (Combo tập 1 +2) Quà tặng kèm : + Bản đặc biệt số lượng giới hạn: Sách bìa mềm khổ 14.5x20.5 cm Set 2 Bookmark được kẹp trong sách 1 card bo góc, shikishi, huy hiệu, standee...', 195300, 83700, 30, 279000, 'https://salt.tikicdn.com/cache/w1200/ts/product/cc/17/e3/1e4f7a8742674e7036157b04e0066851.jpg'),
(982037, 'Thú Tội', 'Minato Kanae', 'Thú tộiCảnh sát nhận định đây là vụ tai nạn nhưng Moriguchi biết ai đã sát hại con gái mình -\xa0 kẻ ở ngay trong lớp học do mình chủ nhiệm. Moriguchi bắt đầu kế hoạch báo thù của riêng cô"Một câu chuy...', 55900, 30100, 35, 86000, 'https://salt.tikicdn.com/cache/w1200/ts/product/45/80/54/5c5a2c14bde00cc5be525efc1a0e16cc.jpg'),
(229809138, 'NGƯỜI THẦY – Nguyễn Chí Vịnh (bìa mềm)', '', 'Nhà tình báo siêu hạng. Còn nhớ vào năm 2004, Báo Thanh Niên đăng loạt ký sự 36 kỳ "Ông tướng tình báo bí ẩn và những điệp vụ siêu hạng". Ông là thiếu tướng - Anh hùng quân đội nhân dân VN tên Đặng Tr...', 219000, 0, 0, 219000, 'https://salt.tikicdn.com/cache/w1200/ts/product/c0/d6/21/59385695aa6f6581397ffad1cc62fe25.jpeg');



ALTER TABLE `books`
ADD KEY (`book_id`);

ALTER TABLE `books`
MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;  


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
(1, 'luong', '123', 'Nguyễn Trọng Đức Lương', 'TP Thủ Đức', 'admin'),
(2, 'nhut', '123', 'Nguyễn Sinh Nhựt', 'Huyện Bình Chánh', 'cus'),
(3, 'quan', '123', 'Võ Phan Anh Quân', 'Quận 1', 'cus'),
(4, 'mquan', '123', 'Nguyễn Tôn Minh Quân', 'Quận 3', 'cus'),
(5, 'an', '123', 'Nguyễn Hoàng An', 'Quận 10', 'ad'),
(6, 'hung', '123', 'Nguyễn Hoàng Hung', 'Quận 5', 'ad');
-- (8, 'toan123', '123', 'Nguyễn Huy Toàn', 'TP Dĩ An', 'cus'),
-- (9, 'Lanh45', '888', 'Hoàng Lan Anh', 'Quận 5', 'cus'),
-- (10, 'John', '678', 'John DuDucent', 'Quận 12', 'cus');




ALTER TABLE `user`
ADD KEY (`user_id`);

ALTER TABLE `user`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;


DROP TABLE IF EXISTS `orders`;
CREATE TABLE orders (
  `order_id` int(11) NOT NULL,
  `receiver_name` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `ship_fee` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng orders
--

INSERT INTO `orders` (`order_id`, `receiver_name`, `address`, `ship_fee`, `user_id`, `status`) VALUES
(12, 'an', 'Ho Chi Minh', '1000', NULL, 'init'),
(14, 'nhut', 'Vung Tau', '2000', NULL, 'init'),
(15, NULL, NULL, NULL, NULL, 'init'),
(16, NULL, NULL, NULL, NULL, 'init'),
(17, NULL, NULL, NULL, NULL, 'init'),
(11, 'luong', 'Ha Noi', '40000', 14, 'init');


ALTER TABLE `orders`
ADD KEY (`order_id`);

ALTER TABLE `orders`
MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT = 18;


