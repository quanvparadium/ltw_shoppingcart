import React, { useState, useEffect } from "react"
import './style.css'
import { ShopGrid } from "../ShopGrid"
import { getAllType, getAllBrand } from "../../ultil"
import { getDrinks } from "../../api"
import { Breadcrumb } from "../../components/Breadcrumb"


export const ShopPage = () => {

    const [brand, setBrand] = useState()
    const [type, setType] = useState()
    const [products, setProducts] = useState([])

    useEffect(() => {
        Promise.resolve(getDrinks()).then(data => {
            console.log(data);
            setProducts(data);
        });
    }, []);
    const breadcrumb = {
        parent: [
            {
                link: "/home",
                name: "Home"
            },
        ],
        current: "Menu"
    }

    const handleClickBrand = (item) => {
        if (item === brand)
        {
            setBrand()
        }
        else setBrand(item)
    }
    const handleClickType = (item) => {
        if (item === type)
        {
            setType()
        }
        else setType(item)
    }


    const ProductFilter = (data) => {
        const tmp = [...data]
        if (brand)
        {
            if (type)
            {
                return tmp.filter(item => item.brand === brand).filter(item => item.type === type)
            }
            return tmp.filter(item => item.brand === brand)
        }
        if (type)
        {
            if (brand)
            {
                return tmp.filter(item => item.brand === brand).filter(item => item.type === type)
            }
            return tmp.filter(item => item.type === type)
        }
        else
        {
            return data
        }
    }
    return (
        <div className="container row">
            <div className='col-12 col-sm-12 col-md-12 col-lg-3 '>
                <div className="default-filter">
                    <Breadcrumb props={breadcrumb} />
                    <span>Sản phẩm</span>
                    <div className='filter-type'>

                        {
                            getAllType(products).map((i, index) => (
                                <button className={`btn-tag ${type === i && "active-tag"}`} key={index} onClick={() => handleClickType(i)}><span>{i}</span></button>
                            ))

                        }
                    </div>
                    {/* <span>Brand</span>
                    <div className='filter-type'>
                        {
                            getAllBrand(products).map((i, index) => (
                                <button className={`btn-tag ${brand === i && "active-tag"}`} key={index} onClick={() => handleClickBrand(i)}><span>{i}</span></button>
                            ))

                        }
                    </div> */}
                </div>
            </div>

            <div className="default-content col-12 col-lg-9">
                <div>
                    <ShopGrid props={ProductFilter(products)} />
                </div>
            </div>
        </div>
    )
}