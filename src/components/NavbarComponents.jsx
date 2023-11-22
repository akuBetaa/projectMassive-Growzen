import { Navbar, Container, Nav } from 'react-bootstrap';

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">PEJUANGTB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <button className='btn btn-primary rounded-2'>Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponents