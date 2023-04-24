import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <nav className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'>
                <div className='nav-item'>
                    <Link to='employees' className='nav-link align-middle px-0'>Nhân viên</Link>
                </div>
                <div className='nav-item'>
                    <Link to='customers' className='nav-link align-middle px-0'>Khách hàng</Link>
                </div>
                <div className='nav-item'>
                    <Link to='products' className='nav-link align-middle px-0'>Sản phẩm</Link>
                </div>
                <div className='nav-item'>
                    <Link to='feedbacks' className='nav-link align-middle px-0'>Phản hồi</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;