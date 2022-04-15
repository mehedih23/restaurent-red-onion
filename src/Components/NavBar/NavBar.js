import './NavBar.css'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../CustomLink/CustomLink'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <CustomLink to="/home">
                    <img className='brand-logo' src="https://i.ibb.co/Ln9GbY8/logo2.png" alt="brand-logo" />
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className='mx-2 py-2 px-3 ' to="/cart">
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </CustomLink>
                        <CustomLink className='mx-2 py-2 px-3 ' to="/deets">Login</CustomLink>
                        <CustomLink className='mx-2 py-2 px-3 rounded-pill bg-danger' to="/memes">Sign up</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar