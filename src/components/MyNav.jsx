import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function MyNav() {
  return (
    <div>
      <Navbar className="px-5 py-3 text-light" bg="dark" expand="lg">
        <Navbar.Brand className="text-light" href="/">
          <h4 className="mb-0">Amazon</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Button className="ml-auto" variant="primary">
            Add Item
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
