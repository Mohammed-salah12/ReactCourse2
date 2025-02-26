import React from "react";
import { ProductCard } from "../../components/Props/Product Card/ProductCard";
import "../../styles/product section/productSection.css";
import productImg from "../../assets/images/productImg.jpg";
export const ProductSection = () => {
  return (
    <div className="productSectionContainerDiv">
      <ProductCard
        ProductImage={productImg}
        productName={"iphone"}
        productPrice={1000}
      />
      <ProductCard
        ProductImage={productImg}
        productName={"ipad"}
        productPrice={500}
      />{" "}
      <ProductCard
        ProductImage={productImg}
        productName={"macbook"}
        productPrice={2000}
      />{" "}
      <ProductCard
        ProductImage={productImg}
        productName={"airtags"}
        productPrice={150}
      />
    </div>
  );
};
