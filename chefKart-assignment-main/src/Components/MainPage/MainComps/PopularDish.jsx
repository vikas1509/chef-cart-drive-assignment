import React from 'react'

function PopularDish({name, dishImage}) {
  return (
    <div id='popular-dish'>
      <a href="#">
          <img id='p-Dish-img' src={dishImage} alt="" />
          <p id='p-Dish-txt'>{name}</p>
      </a>
    </div>
    
  )
}

export default PopularDish