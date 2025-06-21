import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {

  return <>
      <nav>

      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
              <Navbar.Brand href="#">
                  <img src="../../public/developerM.png" width="50" height="50" className="d-inline-block align-top" alt="Logo" />
              </Navbar.Brand>
              <Navbar.Brand href="#">Developer Mike</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarMenu" />
              <Navbar.Collapse id="navbarMenu" className="justify-content-end text-center">
                  <Nav>
                      <Nav.Link href="#">Home</Nav.Link>
                      <Nav.Link href="#">Progetti</Nav.Link>
                      <Nav.Link href="#">Contatti</Nav.Link>
                      <Nav.Link href="#">Social</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      </nav>
  </>

}

export default Header;