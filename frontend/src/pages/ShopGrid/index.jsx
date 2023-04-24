import './style.css'
import React, { useEffect, useState } from 'react'
import { Product } from '../../components/Product'
import { ProductGrid } from '../../components/ProductGrid'

export const ShopGrid = (props) => {

    const [grid, setGrid] = useState("grid")
    const [sortby, setSortBy] = useState(1)


    const handleChange = (e) => {
        setSortBy(e.target.value)
    }

    const handleClick = () => {
        // if (screen.width > 765) {
        //     setGrid("list")
        // }
    }

    return (
        <div className='shopgrid-wrapper'>
            <div className='default-content-filter'>
                <div className='display-icon'>
                    <i className={`fa-solid fa-grip ${grid === "grid" && "active"}`} onClick={() => setGrid("grid")}></i>
                    <i className={`fa-solid fa-list ${grid === "list" && "active"}`} onClick={() => setGrid("list")}></i>
                </div>
                <span>{`${props.props.length}`} sản phẩm.</span>
                {/* <button onClick={Width}>Click</button> */}
            </div>
            <div className='row'>
                {
                    props.props.map((item, index) => (
                        grid === "grid" ?
                            <div className='shop-display col-sm-12 col-md-6 col-lg-6 col-xl-4' key={index}>
                                <Product product={item} />
                            </div> :
                            <div className='col-12' key={index}>
                                <ProductGrid product={item} />
                            </div>
                    ))
                }
            </div>
        </div>

    )
}