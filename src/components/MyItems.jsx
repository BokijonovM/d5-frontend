import React from "react";
import SingleItem from "./SingleItem";
import product from "../Data/product.json";
import { Col, Row } from "react-bootstrap";

function MyItems() {
  return (
    <div
      className="mt-5 d-flex justify-content-center"
      style={{
        marginBottom: "100px",
      }}
    >
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
