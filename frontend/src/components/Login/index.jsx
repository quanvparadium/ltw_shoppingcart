import { useState } from "react"
import { LoginAdmin } from "./LoginAdmin"
import { LoginCustomer } from "./LoginCustomer"
import './style.css'

export const Login = () => {
    const [choose, setChoose] = useState(0)
    return (
        <div className="login">
            {/* <div className={`login-btn ${choose !== 0 && 'hidden'}`}>
                <button onClick={() => setChoose(1)} className="login-btn__btn">Đăng nhâp với tư cách thành viên</button>
                <button onClick={() => setChoose(2)} className="login-btn__btn">Đăng nhập với tư cách quản trị viên</button>
            </div> */}
            <div className="login-choose">
                {/* {
                    choose === 1 ? <LoginCustomer /> :
                        choose === 2 && <LoginAdmin />
                } */}
                <LoginCustomer />
            </div>
            <span onClick={() => setChoose(0)} className={`undeline ${choose === 0 && 'hidden'}`}>Về trang đăng nhập</span>
        </div>
    )
}