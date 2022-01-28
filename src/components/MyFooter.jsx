import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function MyFooter() {
  return (
    <div>
      <Navbar className="px-5" bg="dark" expand="lg">
        <h4 className="mb-0 py-3 text-light">
          Copyright | Strive School | 2022
        </h4>
      </Navbar>
    </div>
  );
}

export default MyFooter;
