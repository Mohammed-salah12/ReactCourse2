import React from "react";
import "../../../styles/product card/productCard.css";
export const ProductCard = (props) => {
  return (
    <div className="productCardContainerDiv">
      <img src={props.ProductImage} className="productImg" alt="" />
      <h1>{props.productName}</h1>
      <h2>{props.productPrice}</h2>
    </div>
  );
};
