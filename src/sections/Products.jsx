import React from "react";
import "../styles/products-section.css";
import { ProductCard } from "../components/ProductCard";
import productImg from "../assets/imgs/productimg.jpeg";
export const Products = () => {
  const products = [
    {
      name: "iphone",
      price: "1001231310$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
    {
      name: "iphone",
      price: "1000$",
      img: productImg,
    },
  ];
  return (
    <div className="products-section">
      {products.map((product, idx) => (
        <div key={idx}>
          <ProductCard
            productImg={product.img}
            productName={product.name}
            productPrice={product.price}
          />
        </div>
      ))}
    </div>
  );
};
