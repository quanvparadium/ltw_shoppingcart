import React, { useState } from "react"
import { formatCurrency } from "../../ultil"
import './style.css'
import { Link } from "react-router-dom"


export const ProductGrid = (props) => {

    const [isEnter, setIsEnter] = useState("leave")
    const handleEnter = () => {
        setIsEnter("enter")
    }

    const handleLeave = () => {
        setIsEnter("leave")
    }

    return (
        <div className="productgrid-container" id="productgrid" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="col-4">
                <img src={props.product.image} alt="" className="productgrid-thumbnail" />
            </div>

            <div className="col-7 productgrid-detail">
                <div>
                    <p className="product-detail__line2" style={{ fontSize: 22 }}>{props.product.name}</p>
                    <p className="product-detail__line3-discount" style={{ padding: 0 }}>
                        {formatCurrency(props.product.price)}
                    </p>
                    {/* <p className="product-detail__line1">{props.product.brand}</p> */}
                    <p className="product-detail__line4">{props.product.description}</p>
                    <Link className="btn btn-primary my-2" to={`/order/${props.product.drink_id}`}>
                        Mua ngay
                    </Link>
                </div>

            </div>
            {/* <div className="productgrid-detail-2">
                <div className="product-detail__line3">
                    <p className="product-detail__line3-discount">
                        {formatCurrency(props.product.price)}
                    </p>
                </div>
                
            </div> */}

            {/* <button className={`product-btn ${isEnter}`}>ADD TO CART</button> */}
        </div>
    )
}