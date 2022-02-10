import React from 'react';
import './product.css';
import StarRateIcon from '@mui/icons-material/StarRate';

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price} </strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (

                        <p><StarRateIcon /> </p>
                    ))}

                </div>
            </div>
            <img src={image} alt="product_image" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product