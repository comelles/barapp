import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {

    return (
        <nav class="bg-dark">
            <div class="container">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand>
                        <img
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="align-top"
                            alt="barApp Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/">barApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar"/>
                    <Navbar.Collapse id="navbar">
                        <Nav className="mr-auto">
                            <NavDropdown title="Platos" id="platos">
                                <NavDropdown.Item href="/crear-plato">Crear plato</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/mis-platos">Mis platos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/pedidos">Pedidos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </nav>
    );
};

export default Header;