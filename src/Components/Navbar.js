import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ArrowRightCircle } from "react-bootstrap-icons";


export const  MyNavbar = () => {
    const [activeLink , setActiveLink] = useState('home');
  const [scrolled , setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if ( window.scrollY > 50){
        setScrolled (true);
      } else {
        setScrolled (false);
      }
    }

    window.addEventListener('scroll' , onScroll);

    return () => window.removeEventListener('scroll' ,onScroll );
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <h1 className='text-white'>BrandName</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggle-icon'><FaBars className='text-white'/></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto d-flex justify-content-center ms">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Product</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('project')}>Pricing</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
          <Nav.Link href="#login" className={activeLink === 'login' ? 'active navbar-link' : "navbar-link text-white"} onClick={() => onUpdateActiveLink('login')}>Login </Nav.Link>
            <button className='vvd' onClick={() => console.log('connect')}><span>JOIN US <ArrowRightCircle size={25}/></span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}