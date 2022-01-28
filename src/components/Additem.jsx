import React from "react";
import { Form, Button } from "react-bootstrap";
function Additem() {
  return (
    <div className="container my-5">
      <Form.Group controlId="blog-form" className="mt-5">
        <Form.Label>Name</Form.Label>
        <Form.Control size="lg" placeholder="Item name" />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Form.Group
          style={{ width: "47%" }}
          controlId="blog-form"
          className="mt-3"
        >
          <Form.Label>Brand</Form.Label>
          <Form.Control size="lg" placeholder="Item brans" />
        </Form.Group>
        <Form.Group
          style={{ width: "47%" }}
          controlId="blog-form"
          className="mt-3"
        >
          <Form.Label>Price</Form.Label>
          <Form.Control size="lg" placeholder="Item price" />
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group
          style={{ width: "47%" }}
          controlId="blog-category"
          className="mt-3"
        >
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ width: "47%" }}
          controlId="blog-form"
          className="mt-3"
        >
          <Form.Label>image url</Form.Label>
          <Form.Control size="lg" placeholder="Item image url" />
        </Form.Group>
      </div>
      <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Item description</Form.Label>
        <Form.Control className="shadow-none" as="textarea" rows={5} />
      </Form.Group>
      <div className="mt-4">
        <Button type="reset" size="lg" variant="outline-dark">
          Reset
        </Button>
        <Button
          type="submit"
          size="lg"
          variant="dark"
          style={{ marginLeft: "1em" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Additem;
