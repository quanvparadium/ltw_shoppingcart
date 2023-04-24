import './index.css'
import { BsGithub, BsFacebook } from "react-icons/bs"
import { FiMail } from 'react-icons/fi'

function Footer() {
	const iconSize = 20;
	const nameList = [
		"Nguyễn Tiến Mạnh",
		"Đặng Nguyên Phúc",
		"Trần Đình Hậu",
		"Hoàng Công Sơn"
	];

	return (
		<div id='footer'>
			{nameList.map((item, idx) => (
				<div className="author" key={idx}>
					<h5 className="author-name">{item}</h5>
					<div className="icon-wrapper d-flex align-items-center justify-content-center">
						<span className="author-icon">
							<BsGithub size={iconSize} />
						</span>
						<span className="author-icon">
							<FiMail className='mail-author-icon' size={iconSize} />
						</span>
						<span className="author-icon">
							<BsFacebook size={iconSize} />
						</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default Footer;