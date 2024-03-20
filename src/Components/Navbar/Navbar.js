import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navebar = ({count}) => {
  console.log(count)
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems}= useContext(ShopContext)
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src = {logo} alt='' /> <p>Shopping Mall</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=> setMenu("shop")}><Link style={{textDecoration: "none"}} to='/'>Shop</Link> {menu === "shop" ? <hr />: <></>}</li>
        <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration: "none"}} to='/men'>Men</Link>  {menu === "men" ? <hr />: <></>}</li>
        <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration: "none"}} to ='/women'>Women</Link>{menu === "women" ? <hr />: <></>}</li>
        <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration: "none"}} to ='/kids'>kids</Link> {menu === "kids" ? <hr />: <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button> <Link style={{textDecoration: "none"}} to='LoginSignup'>Login</Link></button>
        <Link to='cart'><img src={cart_icon} alt='' /></Link>
        {/* <p className='nav-cart-count'>{count}</p> */}
        <p className='nav-cart-count'>{getTotalCartItems()}</p>
      </div>

    </div>
  )
}

export default Navebar
