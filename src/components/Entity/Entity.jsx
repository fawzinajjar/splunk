import React from "react";
import "./Entity.css";
import { getBasicParams } from "./getBasicParams";

const Entity = ({ setSelected, item }) => {
  const { left, top, name, property } = getBasicParams(item);

  console.log("LEFT, TOP: ", {left, top,name, property})
  return (
    <div
      className="EntityItem"
      style={{ left, top }}
      onClick={() => setSelected(item)}
    >
      <span>{name}</span>
    </div>
  );
};
export default Entity;
