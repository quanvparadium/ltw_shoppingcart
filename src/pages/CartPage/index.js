import { useEffect, useState } from 'react'
import { formatCurrency } from '../../ultil'
import { getDrinksByOrderId, removeDrinkFromOrder } from '../../api/order'
import { getDrinks } from '../../api'
import './style.css'
import { getByDisplayValue } from '@testing-library/react'

export const CartPage = () => {
    const [selectedDrinks, setSelectedDrinks] = useState([]);

    useEffect(() => {
        Promise.resolve(getDrinksByOrderId()).then(data => {
            setSelectedDrinks(data);
        });
    }, []);

    const sizeList = {
        s: 'Vừa',
        m: 'Trung',
        l: 'Lớn'
    }

    const total = () => {
        let total = 0

        selectedDrinks.forEach(i => {
            const tops = i.topping.split(",");
            console.log(tops)
            tops.map((item, idx) => {
                if (item === 'Đào ngâm')
                {
                    total += 10000;
                }
                else if (item === 'Trân châu trắng')
                {
                    total += 15000;
                }
                else if (item === 'Foam Cheese')
                {
                    total += 20000;
                }
            })

            total += parseInt(i.price) * parseInt(i.drink_count);
        })
        return total
    }

    const handleRemoveClick = (id) => {
        const answer = window.confirm("Bạn muốn xoá đồ uống này?");

        if (answer)
        {
            removeDrinkFromOrder(id);
            getDrinks();
        }
    }

    const handlePayClick = () => {
        localStorage.removeItem('order_id');
        alert('Thanh toán thành công!')
    }

    return (
        <div className='cart-container' id='cart-page'>
            <div className='cart-wrapper row'>
                <div className='cart-product col-12'>
                    <div className='cart-product__item row'>
                        <div className='product__thumbnail col-4 col-md-2'>
                            <strong>Sản phẩm</strong>
                        </div>
                        <div className='product__name col-5'>
                            <strong>Chi tiết</strong>
                        </div>
                        <div className='product__quantity col-4 col-md-2'>
                            <strong>Số lượng</strong>
                        </div>
                        <div className='product__price col-4 col-md-2'>{
                            <strong>Giá</strong>
                        }</div>
                    </div>
                    {
                        selectedDrinks.length < 1 ? <p>Empty!</p> :
                            selectedDrinks.map((item, index) => (
                                <div className='cart-product__item row' key={index}>
                                    <div className='product__thumbnail col-4 col-md-2'>
                                        <img src={item.image} alt='product-img' />
                                    </div>
                                    <div className='product__name col-5'>
                                        <strong>Tên: {item.name}</strong>
                                        <span>Size: {sizeList[item.size]}</span>
                                        <span>Topping: {item.topping}
                                            {/* {item.selectedTopping.map((i, index) => (
                                                <span key={index}>{i.name}, </span>
                                            ))} */}
                                        </span>
                                    </div>
                                    <div className='product__quantity col-3 col-md-2'>
                                        <span>{item.drink_count}</span>
                                    </div>
                                    <div className='product__price col-3 col-md-2'>{
                                        <span>{formatCurrency(item.price)}</span>
                                    }
                                    </div>

                                    <i className="fa-solid fa-xmark col-1 product__remove_drink"
                                        onClick={() => handleRemoveClick(item.drink_id)}></i>
                                </div>
                            ))
                    }
                    <div className={`checkout ${selectedDrinks.length < 1 && "hidden"}`}
                        style={{
                            display: 'flex'
                        }}
                    >
                        <span className='total-price'>Tổng cộng: {formatCurrency(total())}</span>
                        <button className='btn btn-primary' onClick={handlePayClick}>Thanh toán</button>
                    </div>

                </div>
            </div>
        </div>
    )
}