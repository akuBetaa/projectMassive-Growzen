import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

import LogoImage from "/public/logo2.png"
import LoginComponents from "../components/LoginComponents"

const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor (true);
    } else {
      setChangeColor (false);
    }
  }

  useEffect (() => {
    changeBackgroundColor()

    window.addEventListener( "scroll", changeBackgroundColor);
  })

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={LogoImage} alt="logo-img" /></Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Link Menu Navbar */}
          <Nav className="mx-auto">
            {navLinks.map((link) => {
              return (
                <div className="nav-link text-center" key={link.id}>
                  <NavLink to={link.path} 
                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
                    {link.text}</NavLink>
                </div>
              );
            })}
          </Nav>

          <div className="text-center">
            <LoginComponents/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponents