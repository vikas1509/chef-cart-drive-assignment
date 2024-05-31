import React, { useState } from "react";

function FoodCategorie({ name, catagorieId, setActiveId , isActive}) {

  const handleClick = ()=>{
    console.log(catagorieId)
    setActiveId(catagorieId)
  }
  return (
    <div
      className={`food-categorie ${isActive ? "active" : ""}`}
      onClick={() => handleClick()}
    >
      {name}
    </div>
  );
}

export default FoodCategorie;
