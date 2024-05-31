import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { BiSolidFridge } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import "./styleIngredients.css";
import ingredientsImage from '../images/ingredients-img.png';
import axios from "axios";

function IngredientsPage() {
  const [isVegetableView, setIsVegetableView] = useState(false);
  const [isSpiceView, setIsSpiceView] = useState(false);
  const [dishDetatils, setDishDetails] = useState({});
  useEffect(()=>{
    axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
    .then((val)=>{
      console.log(val.data);
      setDishDetails(val.data);
    })
  } , [])
  if(!dishDetatils)return <>Loading...</>
  return (
    <div className="ingrdients-page">
      <img src={ingredientsImage} className="ingredients-image"/>
      <div className="hero">
        <div>
          <h1>{dishDetatils.name}</h1>
          <p id="rating">
            4.2
            <FaStar />
          </p>
        </div>
        <h3 className="discription">
          Chicken fried in deep tomato sauce with delicious spices
        </h3>
        
      </div>
      <p className="time">
          <FaRegClock /> {dishDetatils.timeToPrepare}
      </p>
      <hr></hr>
      <div className="ingredients">
        <div className="ingredients-hero">
          <h2>Ingredients</h2>
          <p>For 2 people</p>
        </div>

        <div className="vegetables">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h3>Vegetables</h3>
            {isVegetableView ? (
              <FaSortDown
                onClick={() => setIsVegetableView(!isVegetableView)}
              />
            ) : (
              <FaCaretRight
                onClick={() => setIsVegetableView(!isVegetableView)}
              />
            )}
          </div>
          {isVegetableView ? (
            <table className="content-table">
              {dishDetatils.ingredients?.vegetables?.map((vegi)=>
                <tr>
                  <td>{vegi.name}</td>
                  <td>{vegi.quantity}</td>
                </tr>
              )}
            </table>
          ) : (
            <></>
          )}
        </div>
        <div className="spices">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h3>Spices</h3>
            {isSpiceView ? (
              <FaSortDown onClick={() => setIsSpiceView(!isSpiceView)} />
            ) : (
              <FaCaretRight onClick={() => setIsSpiceView(!isSpiceView)} />
            )}
          </div>
          {isSpiceView ? (
            <table className="content-table">
              {dishDetatils.ingredients?.spices?.map((spice)=>
                <tr>
                  <td>{spice.name}</td>
                  <td>{spice.quantity}</td>
                </tr>
              )}
            </table>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="appliances">
        <h2 className="appliances-hero">Appliances</h2>
        <div className="appliance">
          {dishDetatils.ingredients?.appliances?.map((appliance)=>
            <div id="appliance-card">
              <img src={appliance.image} alt="" />
              <p>{appliance.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IngredientsPage;
