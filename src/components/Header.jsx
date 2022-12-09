import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Header = () => {

const {cartItems} = useSelector((state)=>state.cart)
  return (
    <nav className='navbar'>
      <h1>@Logo.</h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/cart"}>
        <FiShoppingCart className='ssv' />
        <p className='cartlength'>{cartItems.length}</p>

      </NavLink>

    </nav>
  )
}

export default Header