import React from 'react'
import { NavLink } from 'react-router-dom'
import { PiChefHatFill } from "react-icons/pi";

function NavBar() {
  return (
    <nav>
        <h1><PiChefHatFill/> ChefCart</h1>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cart-page"}>Cart</NavLink>
    </nav>
  )
}

export default NavBar