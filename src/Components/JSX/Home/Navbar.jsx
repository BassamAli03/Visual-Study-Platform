import { Link} from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../CSS/Home/Navbar.css";
import icon from '../../../Assets/Images/icon.svg';

export let MyNavBar=()=>{
    return(
        <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              <img src={icon} alt="Icon" className='icon-img' />
              <span className='mx-2 text-light lh-1 fw-semibold'>
                Virtual
                <br></br>
                Study
                <br></br>
                Platform
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/auth' className='text-uppercase'>SignUp/Login</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About us</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Get in touch</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}