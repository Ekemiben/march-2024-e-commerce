import React from 'react';
import { useContext } from 'react';
import './cartitems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className='cart-item'>
      <div className='cart-items-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     {all_products.map((e)=>{
        if(cartItems[e.id] > 0){
            
            return  <div>
            <div className='cart-items-format cart-items-format-main'>
              <img src={e.image} alt='' className='carticon-product-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cart-item-qty' >{(cartItems[e.id])} </button>

              <p className='total-price'>${Number(e.new_price) * Number(cartItems[e.id])}</p>
              <img src = {remove_icon} alt='' onClick={()=>{removeFromCart(e.id)}} className='cart-item-remove-icon' /> 
              

              
            </div>
            <hr />
            </div>
        }
        return null;
     })}
      <div className='cart-item-down'>
        <div className=' cart-item-total'>
            <h1>Cart Total</h1>
            <div >
                <div className='cart-item-total-items'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cart-item-total-items'>
                    <p>Shipping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cart-item-total-items'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className='cart-item-promo-code'>
                <p>If you have promo code, Enter it here</p>
                <div className='cart-item-promo-box'>
                    <input type='text'placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
