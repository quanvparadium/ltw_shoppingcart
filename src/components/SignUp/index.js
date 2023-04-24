import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/user';
import './style.css'

export const SignUp = ({ switchLogin }) => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddresss] = useState("");
    const [email, setEmail] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validatePassword = (password, repassword) => {
        return password === repassword;
    }

    const handleSignUp = async () => {
        if (!username)
        {
            alert("Vui lòng nhập tên đăng nhập!");
            return;
        }
        if (!password)
        {
            alert("Vui lòng nhập mật khẩu!");
            return;
        }
        if (!name)
        {
            alert("Vui lòng nhập tên!");
            return
        }
        if (!address)
        {
            alert("Vui lòng nhập địa chỉ!");
            return
        }

        if (!email)
        {
            alert("Vui lòng nhập email!");
            return
        }
        if (!repassword)
        {
            alert("Vui lòng nhập lại mật khẩu!");
            return
        }

        if (!validateEmail(email))
        {
            alert("Vui lòng kiểm tra lại định dạng email!");
            return
        }
        if (!validatePassword(password, repassword))
        {
            alert("Mật khẩu nhập lại không khớp!");
            return
        }

        const status = await signUp(username, password, name, email, address);
        //console.log(status);
        if (status)
        {
            switchLogin();
        }
        else alert('Đăng ký thất bại!');
    }

    return (
        <div className='signup'>
            <strong>Tên đăng nhập</strong>
            <input
                type="text" name="username" id="username"
                onChange={e => setUsername(e.target.value)}
                placeholder="Nhập tên đăng nhập" />
            <strong>Họ và tên</strong>
            <input type="text" name="name" id="name"
                onChange={e => setName(e.target.value)}
                placeholder="Nhập họ và tên" />
            <strong>Email</strong>
            <input type="email" name="email" id="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Nhập email" />
            <strong>Địa chỉ</strong>
            <input type="text" name="address" id="address"
                onChange={e => setAddresss(e.target.value)}
                placeholder="Nhập địa chỉ" />
            <strong>Mật khẩu</strong>
            <input type="password" name="password" id="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu" />
            <input type="password" name="repassword" id="repassword"
                onChange={e => setRepassword(e.target.value)}
                placeholder="Nhập lại mật khẩu" />
            <button className='signup-btn' onClick={handleSignUp}>Đăng ký</button>
        </div>
    )
}