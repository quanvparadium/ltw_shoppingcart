import React, { useState, useEffect } from 'react'
import { formatCurrency } from '../../ultil';
import './style.css'
import { Link, useNavigate } from "react-router-dom";



export const Product = ({ product }) => {

    const [isEnter, setIsEnter] = useState("leave")
    const navigate = useNavigate();

    const handleEnter = () => {
        setIsEnter("enter")
    }

    const handleLeave = () => {
        setIsEnter("leave")
    }

    const handleProductClick = () => {
        navigate(`/order/${product.drink_id}`);
    }

    return (
        <div className="product-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="product-wrapper" onClick={handleProductClick}>
                <img src={product.image} alt="product-img" className="produvt-thumbnail" />
                <div className="product-detail">
                    <p className="product-detail__line2">{product.name}</p>
                    <div className="product-detail__line3">
                        <p className="product-detail__line3-discount">{formatCurrency(parseInt(product.price))}</p>
                    </div>
                </div>
                <div className={`product-action ${isEnter}`}>
                    {/* <Link to={`/order/${product.drink_id}`}><i className="fa-solid fa-magnifying-glass"></i></Link>
                    <Link><i className="fa-regular fa-heart"></i></Link>
                    <Link><i className="fa-solid fa-recycle"></i></Link> */}
                </div>
            </div>
        </div>
    )
}