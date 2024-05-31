import React from 'react'
import { LuSquareDot } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import Equipment from './subComponents/Equipment';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addDish, removeDish, resetCart } from '../../../slices/dishCartSlice';
import { v4 as uuidv4 } from 'uuid';

function DishCard({name, rating, description, equipments, dishImage, dishId}) {
  const dispatch = useDispatch();
  
  const handleAddDish = ()=>{
    console.log("dish added", name)
    dispatch(addDish({
      name : name,
      dishId : dishId,
      uId : uuidv4()
    }))
    // console.log("cart", cart)
  }
  return (
    <div className='dish-card'>
      <div className='dish-details'>
      <div className='title-rating'>
        <h1>{name}</h1>
        <LuSquareDot style={{color: "green", fontSize:"2rem"}} title='Veg'/>
        <p id='rating'>{rating}<FaStar/></p>
      </div>
      <div className='equipments-ingridients'>
        <div className='equipments'>
          {equipments.map((equipment)=>
              <Equipment name={equipment}/>
          )}
        </div>
        <div id='gap'></div>
        <div className='ingredients'>
          <h4>Ingredients</h4>
          <Link to={"/ingredients-page"}>View list <IoIosArrowForward /></Link>
        </div>
      </div>
      <h3 className='discription'>{description}</h3>
      </div>
      <div className='dish-image' onClick={()=>handleAddDish()}>
        <img src={dishImage} alt="" />
        <button className='add-btn'>Add +</button>
      </div>
    </div>
  )
}

export default DishCard