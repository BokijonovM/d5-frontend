import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
// import product from "../Data/product.json";
import { Col, Row } from "react-bootstrap";

function MyItems() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://m6-benchmark.herokuapp.com/product");
        if (res.ok) {
          let data = await res.json();
          setProducts(data);
          console.log("Data", data);
        } else {
          console.log("Fetching filed!");
        }
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="mt-5 d-flex justify-content-center"
      style={{
        marginBottom: "100px",
      }}
    >
      <Row>
        {products.map(post => (
          <Col>
            <SingleItem key={post.id} products={post} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MyItems;
