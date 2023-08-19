import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

 const Header = () => {
  
  return (
    <Router>
      <Navbar expand="md" className= "scrolled" >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className= 'navbar-link' >Home</Nav.Link>
              <Nav.Link href="#skills" className= 'navbar-link' >Skills</Nav.Link>
              <Nav.Link href="#projects" className= 'navbar-link' >Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <Box className="social-icon" >
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </Box>
              {/* <HashLink to='#connect'> */}
                <Button className="vvd"><span>Let’s Connect</span></Button>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default Header