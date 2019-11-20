// * Coded by Agora42.com team *
import React from "react";
// importing the logo from assets/img
import logo from "./../assets/img/logo.png";
// importing the component from react-bootstrap
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

//Start the components of Navbar
function SiteNavbar() {
  return (
    <div className="Nan-content">
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="nav-bg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#About">| About Us</Nav.Link>
            <Nav.Link href="#Portfolio">| Portfolio</Nav.Link>
            <Nav.Link href="#Magzine">| Magzine</Nav.Link>
            <Nav.Link href="#WhyUs">| Why Us?</Nav.Link>
            <Nav.Link href="#TeamMember">| Our Team</Nav.Link>
            <Nav.Link href="#AboutTeam">| Team List</Nav.Link>
            <Nav.Link href="#contactus">| Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
//end of the components of Navbar

export default SiteNavbar;
