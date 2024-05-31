import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeDish } from '../../slices/dishCartSlice';
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import './styleCart.css'
import cartImg from '../images/cartImg.png'

function CartPage() {
    const cart =  useSelector((state)=>state.dishCart);
    const dispatch = useDispatch();
    const handleRemoveItem = (id)=>{
        dispatch(removeDish(id));
    }
  return (
    <div className='cart'>
        <img src={cartImg} className="cartImg" alt="" />
        <h1 style={{margin:"1rem"}}><FaShoppingCart/> Cart</h1>
        {cart.map((item)=>
            <div className='cart-item-card'>
                <h3>{item.name}</h3>
                <MdDelete onClick={()=>handleRemoveItem(item.uId)}/>
            </div>
        )}
    </div>
  )
}

export default CartPage