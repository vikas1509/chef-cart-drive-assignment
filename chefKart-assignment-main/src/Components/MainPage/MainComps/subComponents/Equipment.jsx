import React from "react";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";

function Equipment({name}) {
  return (
    <div className="equipment">
      {name == "Refrigerator" ? <TbFridge /> : <LuMicrowave/>}
      <p>{name}</p>
    </div>
  );
}

export default Equipment;
