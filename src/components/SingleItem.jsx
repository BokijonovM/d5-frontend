import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function SingleItem({ product }) {
  const { name, imageUrl, category, price, description } = product;
  return (
    <div className=" d-flex justify-content-center">
      <Row>
        <Col>
          <Card className="mx-2 mb-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>
                {category} {price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SingleItem;
