import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {

  return <>
      <nav className='position-fixed top-0 w-100 '>

      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
              <Navbar.Brand href="#">
                  <img src="../../public/developerM.png" width="50" height="50" className="d-inline-block align-top" alt="Logo" />
              </Navbar.Brand>
              <Navbar.Brand href="#">Developer Mike</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarMenu" />
              <Navbar.Collapse id="navbarMenu" className="justify-content-end text-center">
                  <Nav>
                          <NavLink to="/" className='text-decoration-none p-1'>Home</NavLink>
                          <NavLink to="/projects" className='text-decoration-none p-1'>Progetti</NavLink>
                          <NavLink to="/contacts" className='text-decoration-none p-1'>Contatti</NavLink>
                          <NavLink to="/social" className='text-decoration-none p-1'>Social</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      </nav>
  </>

}

export default Header;