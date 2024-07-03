import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, setCartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {/* Check if the item is in the cart */}
                {!cartItems[id]?
                    // If not in the cart, show the add icon
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
                    :
                    // If in the cart, show the counter with remove and add icons
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from Cart" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Increase Quantity" />
                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};


export default FoodItem