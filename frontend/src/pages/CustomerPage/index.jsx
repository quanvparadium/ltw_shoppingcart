import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { alterUser } from '../../api/user'
import { Breadcrumb } from '../../components/Breadcrumb'
import { useAppContext } from '../../context'
import './style.css'

export const CustomerPage = () => {
    const user = {
        username: localStorage.getItem('username'),
        name: localStorage.getItem('name'),
        address: localStorage.getItem('address'),
        point: localStorage.getItem('point'),
        password: "12345678",
        role: localStorage.getItem('role'),
        avatar: "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2-560x560.jpg"
    }

    const [current, setCurrent] = useState(user)
    const navi = useNavigate();

    const [address, setAddress] = useState()
    const [name, setName] = useState()
    const [img, setImg] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [newpass, setNewpass] = useState()
    const [renewpass, setRenewpass] = useState()
    const [type, setType] = useState("password")

    const breadcrumb = {
        parent: [
            {
                name: "Trang chủ",
                link: "/home"
            }
        ],
        current: "Người dùng"
    }

    const handleAddress = (e) => {
        // if (e !== undefined)
        // {
        //     setCurrent({ ...current, "address": e })
        // }
        change()
    }
    const handleName = (e) => {
        // console.log(e)
        // if (e !== undefined)
        // {
        //     setCurrent({ ...current, "name": e })
        //}
        change()
    }

    const onImageChange = (event) => {
        // if (event.target.files && event.target.files[0])
        // {
        //     setCurrent({ ...current, "avatar": (URL.createObjectURL(event.target.files[0])) })
        // }
        change()
    }

    const handleUsername = (e) => {
        // if (e !== undefined)
        // {
        //     setCurrent({ ...current, "username": e })
        // }
        change()
    }

    const handlePass = (e) => {
        const pass = localStorage.getItem('password');
        if (!pass || pass !== password)
        {
            alert("Sai mật khẩu!!")
            // setNewpass("")
            // setRenewpass("")
            return;
        }
        if (newpass !== renewpass)
        {
            alert("Mật khẩu không khớp!!")
            // setNewpass("")
            // setRenewpass("")
            return;
        }
        change()
    }

    const change = async () => {
        await alterUser(localStorage.getItem('username'),
            newpass ?? localStorage.getItem('password'),
            name ?? localStorage.getItem('name'), "ab",
            address ?? localStorage.getItem('address')).then(() => { window.location.reload(); })
    }

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('name');
        localStorage.removeItem('point');
        localStorage.removeItem('address');
        localStorage.removeItem('role');
        localStorage.removeItem('order_id');
        navi('/');
    }

    return (
        <div className='user-container' id='cus-page'>
            <Breadcrumb props={breadcrumb} />
            <div className='user-wrapper row'>
                <div className='user-avatar col-12 col-lg-4'>
                    <img src={current.avatar} alt='avt' />
                    <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi ảnh đại diện</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <strong>Nhập tên mới</strong>
                                    <input type="file" onChange={e => setImg(e)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={e => onImageChange(img)}>Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='acpoint'>Điểm tích luỹ: {current.point}</p>
                </div>
                <div className='user-infor col-12 col-lg-6'>
                    <h5>Thông tin cá nhân</h5>
                    <div className='user-name'>
                        <strong>Tên người dùng</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal1"></i>
                        <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi tên</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập tên mới</strong>
                                        <input type="text" placeholder="tên" onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handleName(name)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>{current.name}</span>
                    <div className='user-name'>
                        <strong>Địa chỉ</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
                        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi địa chỉ</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập địa chỉ</strong>
                                        <input type="text" placeholder="địa chỉ" onChange={e => setAddress(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handleAddress(address)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>{current.address}</span>

                    {/* <div className='user-name'>
                        <strong>Tên đăng nhập</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
                        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi Username</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập tên đăng nhập mới</strong>
                                        <input type="text" placeholder="tên đăng nhập" onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handleUsername(username)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <span>{current.username}</span> */}

                    <div className='user-name'>
                        <strong>Mật khẩu</strong>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal4"></i>
                        <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thay đổi địa chỉ</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <strong>Nhập mật khẩu cũ</strong>
                                        <input type="text" placeholder="Mật khẩu cũ" onChange={e => setPassword(e.target.value)} />
                                        <strong>Nhập mật khẩu mới</strong>
                                        <input type="text" placeholder="Mật khẩu mới" onChange={e => setNewpass(e.target.value)} />
                                        <strong>Nhập lại mật khẩu mới</strong>
                                        <input type="text" placeholder="Mật khẩu mới" onChange={e => setRenewpass(e.target.value)} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn productpade-btn__active" data-bs-dismiss="modal" onClick={() => handlePass(password)}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type={type} value={current.password} className="user-pass" />
                    {/* <div style={{ display: "flex", alignItem: "center" }}>
                        <input type="checkbox" onClick={handleShow} />
                        <span style={{ paddingLeft: "4px" }}>Show Password</span>
                    </div> */}
                    <br></br>
                    <br></br>
                    <button className='btn btn-primary border-0 m-1'
                        onClick={handleLogout}>
                        Đăng xuất
                    </button>
                </div>

            </div>
        </div >
    )
}