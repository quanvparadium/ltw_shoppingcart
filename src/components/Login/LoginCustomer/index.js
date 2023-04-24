import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/user.js";

const LoginCustomer = memo(() => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	// useEffect(() => {
	//     console.log(username, password)
	// })

	async function handleLogin() {
		const status = await login(username, password);
		if (status)
		{
			navigate('/home');
		}
		else
		{
			alert('Vui lòng kiểm tra lại Tên đăng nhập và Mật khẩu!!');
		}
	}


	return (
		<div className="logincustomer">
			<div className="logincustomer-form">
				<strong>Tên đăng nhập</strong>
				<input
					type="text" name="username"
					id="username" placeholder="Nhập tên đăng nhập"
					onChange={e => setUsername(e.target.value)}
				/>
				<strong>Mật khẩu</strong>
				<input
					type="password" name="password"
					id="password" placeholder="Nhập mật khẩu"
					onChange={e => setPassword(e.target.value)}
				/>
				<button className="login-btn__btn" onClick={handleLogin}>
					{/* <a href="/home">Login</a> */}
					Login
				</button>
			</div>
		</div>
	)
})

export { LoginCustomer };