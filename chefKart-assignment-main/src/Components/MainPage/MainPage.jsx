import React, { useState, useEffect } from "react";
import DishCard from "./MainComps/DishCard";
import DateTimeCard from "./MainComps/DateTimeCard";
import FoodCategorie from "./MainComps/FoodCategorie";
import PopularDish from "./MainComps/PopularDish";
import "./styleMain.css";
import axios from "axios";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addDish, removeDish, resetCart } from '../../slices/dishCartSlice';
import { MdFastfood } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function MainPage() {
  const foodCategories = [
    {value:"All", id: 0},
    { value: "Italian", id: 1 },
    { value: "Indian", id: 2 },
    { value: "Chinese", id: 3 },
    { value: "Thai", id: 4 },
    { value: "Continental", id: 5 },
  ];
  const [activeId, setActiveId] = useState(0);
  const [dishes, setDishes] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);

  const cart =  useSelector((state)=>state.dishCart);
  const dispatch = useDispatch();


  // console.log(popularDishes, dishes)

  useEffect(() => {
    axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      )
      .then((val) => {
        setDishes(val.data.dishes);
        setPopularDishes(val.data.popularDishes);
      });
  }, []);
  const handleResetCart = ()=>{
    dispatch(resetCart())
  }

  if(!dishes || !popularDishes)return <h1>Loading...</h1>
  return (
    <div className="main-page">
      <DateTimeCard></DateTimeCard>
      <div className="food-categories">
        {foodCategories.map((catagorie) => (
          <FoodCategorie
            name={catagorie.value}
            catagorieId={catagorie.id}
            setActiveId={setActiveId}
            isActive={activeId === catagorie.id}
          />
        ))}
      </div>
      <div className="popular-dishes">
        {popularDishes.map((pdish) => (
          <PopularDish
            name={pdish.name}
            dishImage={pdish.image}
            id={pdish.id}
          />
        ))}
      </div>
      <div className="dish-cards">
        <div className="recommended">
          <h2>Recommended <FaCaretDown/></h2>
          <div className="menu">Menu</div>
        </div>

        {dishes.map((dish) => 
          <DishCard
            name={dish.name}
            rating={dish.rating}
            description={dish.description}
            equipments={dish.equipments}
            dishImage={dish.image}
            dishId={dish.id}
          />
        )}
      </div>
      {cart.length > 0 ? <div className="cartPopUp">
        <div>
        <MdFastfood /> 
          <p>{cart.length} food items selected</p>
        </div>
        <div>
        <MdDelete onClick={handleResetCart} />
          <Link to={"/cart-page"}><FaArrowRight/></Link>
        </div>
          
          
        </div> : <h1></h1>}
    </div>
  );
}

export default MainPage;
