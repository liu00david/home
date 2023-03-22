import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="/aboutme">About me</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="/funstuff">Fun stuff</Nav.Link>
    </Nav.Item>
    </Nav>
  );
}

export default Navbar;