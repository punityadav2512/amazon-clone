import React from 'react';
import './checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQej3mcYulB7ZzPBUTx5AF5DP6bEK12WpzqHA&usqp=CAU" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket </h2>
                    {/* basketItem */}
                    {/* basketItem */}
                    {/* basketItem */}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;