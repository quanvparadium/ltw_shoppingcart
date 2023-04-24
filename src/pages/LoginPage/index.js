import { useState } from 'react'
import { Footer } from '../../components'
import { Login } from '../../components/Login'
import { LoginAdmin } from '../../components/Login/LoginAdmin'
import { SignUp } from '../../components/SignUp'
import './style.css'

export const LoginPage = () => {
    const [choose, setChoose] = useState(0)
    const handleClick = () => {
        choose === 0 ? setChoose(1) : setChoose(0);
    }
    return (
        <div className='login-container'>
            <div className='login-wraper'>
                <span className='login-header'>BK-Coffee</span>
                {
                    choose === 0 ?
                        <div className='login-choose'>
                            <span className='login-swap'>Chưa có tài khoản? <span onClick={handleClick}>Đăng ký tại đây</span></span>
                            <Login />
                        </div> :
                        <div className='login-choose'>
                            <span className='login-swap'>Đã có tài khoản? <span onClick={handleClick}>Đăng nhập</span></span>
                            <SignUp switchLogin={handleClick} />
                        </div>

                }
            </div>
        </div>
    )
}