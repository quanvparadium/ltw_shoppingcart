import { useEffect, useState } from 'react';
import './index.css'
import Nav from './nav'
import {
    Employee,
    Customer,
    Product,
    Feedback
} from './content';
import {
    Routes,
    Route,
} from 'react-router-dom';

function Admin() {
    return (
        <div className="container-fluid" id='admin-container'>
            <div className="row flex-nowrap">
                <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0' id='admin-menu'>
                    <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
                        <Nav />
                    </div>
                </div>
                <div className='col py-3'>
                    <Routes>
                        <Route path='employees' element={<Employee />} />
                        <Route path='customers' element={<Customer />} />
                        <Route path='products' element={<Product />} />
                        <Route path='feedbacks' element={<Feedback />} />
                        <Route path='' element={<Employee />} />
                    </Routes>

                </div>
            </div>
        </div>
    )
}

export default Admin;