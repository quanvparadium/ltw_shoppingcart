import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { formatCurrency } from '../../ultil';
import './style.css'



export const ProductMini = (props) => {

    const [isEnter, setIsEnter] = useState("leave")

    const handleEnter = () => {
        setIsEnter("enter")
    }

    const handleLeave = () => {
        setIsEnter("leave")
    }


    return (
        // <div className="productmini-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        //     <div className="productmini-wrapper">
        //         <img src={props.product.thumbnail} alt="" className="produvt-thumbnail"/>
        //         <div className={`product-action ${isEnter}`}>
        //             <a href={`/order/${props.product.index}`}><i className="fa-solid fa-magnifying-glass"></i></a>
        //             <Link><i className="fa-regular fa-heart"></i></Link>
        //             <Link><i className="fa-solid fa-recycle"></i></Link>
        //         </div>
        //     </div>
        // </div>
        <div className="product-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="product-wrapper product-mini">
                <img src={props.product.image} alt="" className="produvt-thumbnail" />
                <span className='product-name'>{props.product.name}</span>
                <span className='product-price'>{formatCurrency(props.product.price)}</span>
                <div className={`product-action ${isEnter}`}>
                    <a href={`/order/${props.product.drink_id}`}><i className="fa-solid fa-magnifying-glass"></i></a>
                    {/* <Link to="/order"><i className="fa-solid fa-magnifying-glass"></i></Link> */}
                    <Link><i className="fa-regular fa-heart"></i></Link>
                    <Link><i className="fa-solid fa-recycle"></i></Link>
                </div>
            </div>
        </div>
    )
}