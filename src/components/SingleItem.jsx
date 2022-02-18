import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleItem({ products }) {
  const { name, imageUrl, category, price, description, _id } = products;
  return (
    <div className=" d-flex justify-content-center">
      <Row>
        <Col>
          <Link to={_id} style={{ textDecoration: "none", color: "black" }}>
            <Card className="mx-2 mb-4 p-2" style={{ width: "18rem" }}>
              <Card.Img
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "imageUrl",
                }}
                variant="top"
                src={imageUrl}
              />
              <Card.Body>
                <Card.Title>
                  <h5>{name}</h5>
                </Card.Title>
                <Card.Text>
                  <h5>{description}</h5>
                </Card.Text>
                <Card.Text>
                  <h6>
                    {category} {price}
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default SingleItem;
