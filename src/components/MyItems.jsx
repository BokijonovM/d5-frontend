import React from "react";
import SingleItem from "./SingleItem";
import product from "../Data/product.json";

function MyItems() {
  return (
    <div className="d-flex justify-content-center">
      <SingleItem />
    </div>
  );
}

export default MyItems;
