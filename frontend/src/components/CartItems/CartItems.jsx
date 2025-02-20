import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

export const CartItems = () => {

    const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);

  return (
    <div className='cart-items'>
        <div className="cart-items-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            
            if(cartItems[e.id]>0){
                return <div>
                    <div className="cart-items-format cart-items-format-main">
                        <img src={e.image} alt="" className="cart-items-producticon" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cart-items-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img className='cart-items-removeicon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr/>
                </div>
            }
            return null;
        })}
        <div className="cart-items-down">
            <div className="cart-items-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className='cart-items-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cart-items-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cart-items-total-item'>
                        <p>Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className="cart-items-promocode">
                <p>If you have the promo code, Enter it here</p>
                <div className="cart-items-promobox">
                    <input type='text' placeholder='promocode'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
