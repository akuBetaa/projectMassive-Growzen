import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import { navLinks } from "../data/index";
import { Link, NavLink, useNavigate } from "react-router-dom";

import LogoImage from "../assets/logo/logo-tb.png"
import LoginComponents from "../components/LoginComponents"

const NavbarComponents = () => {
  const navigate = useNavigate()
  const [changeColor, setChangeColor] = useState(false);
  const [token, setToken] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }

  const changeBackgroundColor = () => {
    setToken(localStorage.getItem("token"))
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  })

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#beranda"><img src={LogoImage} alt="logo-img" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Link Menu Navbar */}
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className="nav-link text-center" key={link.id}>
                  <NavLink to={link.path}
                    className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                    {link.text}</NavLink>
                </div>
              );
            })}
          </Nav>

          <div className="text-center">
            <LoginComponents />
            {
              token ? <Button
                variant='primary'
                onClick={handleLogout}
              >
                LogOut
              </Button> : ""
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponents