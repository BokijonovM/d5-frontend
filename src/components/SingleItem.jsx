import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function SingleItem() {
  return (
    <div className="my-5 d-flex justify-content-center">
      <Row>
        <Col>
          <Card className="mx-2 mb-4" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1643306633346-30cf2efcab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SingleItem;
