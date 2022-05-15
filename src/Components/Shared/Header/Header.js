import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import Logo from '../../../Images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top' >
            <Container>
                <Navbar.Brand as={Link} to="/"><img height={50} src={Logo} alt="" /> <span className='fw-bold'>Daily Needs</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="home#items" className='text-white fw-bold'>Items</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className='text-white fw-bold'>Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/additem" className='text-white fw-bold'>Add Item</Nav.Link>
                                <Nav.Link as={Link} to="/manageitem" className='text-white fw-bold'>Manage Item</Nav.Link>
                            </>
                        }

                        {
                            user ?
                                <button className='btn btn-link text-white fw-bold text-decoration-none' onClick={handleSignOut}>SignOut</button>
                                :
                                <Nav.Link as={Link} to="/login" className='fw-bold text-white'>
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;