import { useState } from "react"
import { LoginAdmin } from "./LoginAdmin"
import { LoginCustomer } from "./LoginCustomer"
import './style.css'

export const Login = () => {
    const [choose, setChoose] = useState(0)
    return (
        <div className="login">
            <div className="login-choose">
                <LoginCustomer />
            </div>
            <span onClick={() => setChoose(0)} className={`undeline ${choose === 0 && 'hidden'}`}>Về trang đăng nhập</span>
        </div>
    )
}