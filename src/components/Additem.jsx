import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
function Additem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [cover, setCover] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const newItem = {
      name,
      description,
      brand,
      cover,
      price,
      category,
    };
    try {
      const res = await fetch(`http://localhost:3001/products`, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let data = await res.json();
      } else {
        console.log("POST failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="blog-form" className="mt-5">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            size="lg"
            placeholder="Item name"
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Form.Group
            style={{ width: "47%" }}
            controlId="blog-form"
            className="mt-3"
          >
            <Form.Label>Brand</Form.Label>
            <Form.Control
              value={brand}
              onChange={e => setBrand(e.target.value)}
              size="lg"
              placeholder="Item brans"
            />
          </Form.Group>
          <Form.Group
            style={{ width: "47%" }}
            controlId="blog-form"
            className="mt-3"
          >
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              onChange={e => setPrice(e.target.value)}
              size="lg"
              placeholder="Item price"
            />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
          <Form.Group
            style={{ width: "47%" }}
            controlId="blog-category"
            className="mt-3"
          >
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={e => setCategory(e.target.value)}
              size="lg"
              as="select"
            >
              <option>Best Seller</option>
              <option>Comfortable</option>
              <option>Great Condition</option>
              <option>Used like new</option>
              <option>New</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            style={{ width: "47%" }}
            controlId="blog-form"
            className="mt-3"
          >
            <Form.Label>Image url</Form.Label>
            <Form.Control
              value={cover}
              onChange={e => setCover(e.target.value)}
              size="lg"
              placeholder="Item image url"
            />
          </Form.Group>
        </div>
        <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Item description</Form.Label>
          <Form.Control
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="shadow-none"
            as="textarea"
            rows={5}
          />
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
      </Form>
    </div>
  );
}

export default Additem;
