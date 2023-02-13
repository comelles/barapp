import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Header_cliente = () => {

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
                    <Navbar.Brand href="/menu">barApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar"/>
                    <Navbar.Collapse id="navbar">
                        <Nav className="mr-auto">
                            <Nav.Link href="/menu">Menu</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </nav>
    );
};

export default Header_cliente;