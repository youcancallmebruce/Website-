import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
        <div className='item'>
            <Link to={`/product/${props.id}` }><img src={props.image} alt={props.name} className="item-image"/></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    <s>${props.old_price}</s>
                </div>
            </div>
        </div>
    );
};

export default Item;
