import React from "react";
import SingleItem from "./SingleItem";
import product from "../Data/product.json";
import { Col, Row } from "react-bootstrap";

function MyItems() {
  return (
    <div className="my-5 d-flex justify-content-center">
      <Row>
        {product.map(post => (
          <Col md={4}>
            <SingleItem key={post.title} product={post} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MyItems;
