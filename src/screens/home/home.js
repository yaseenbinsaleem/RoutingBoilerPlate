import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import "./home.css";
import Card2Component from "../../components/card/card2";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../config/redux/reducers/products";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";

function Home() {
  
  const Request = async () => {
    const res = await fetch("https://dummyjson.com/products", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
    
    

    return await res.json();
  };
  // const dispatch = useDispatch();

  // const {
  //   products: { Products },
  // } = useSelector((state) => state);

  // dispatch(GetProducts());

  // useEffect(() => {
  //   {
  //     Products?.products && setProductData(Products?.products);
  //   }
  // }, []);
  useEffect(() => {
     Request()
    }, []);
  let [productData, setProductData] = useState([]);

// console.log("Products",Products);
console.log("productData",productData);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {productData.map((data, i) => (
          <Card2Component
            key={i}
            id={data.id}
            image={data.images[0]}
            title={data.title}
            price={data.price}
            description={data.description}
          ></Card2Component>
        ))}
      </div>
    </>
  );
}

export default Home;
