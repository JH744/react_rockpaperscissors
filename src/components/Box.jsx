import React from "react";

const Box = ({ title, item }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img className="item-img" src={item.img && item.img} alt="img" />
      <h2>Win</h2>
    </div>
  );
};

export default Box;
