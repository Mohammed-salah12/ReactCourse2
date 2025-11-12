import React from "react";
import "../styles/products-section.css";
export const ProductCard = (props) => {
  return (
    <div className="productCard">
      <img src={props.productImg} alt="" />
      <h1>{props.productName}</h1>
      <p>{props.productPrice}</p>
    </div>
  );
};
