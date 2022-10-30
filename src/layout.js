import {Outlet,Link} from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Col} from "react-bootstrap";

export default function (){
    return(
        <>
            <Container style={{ height: 700}}>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Col className={'d-flex'}>
                            <Navbar.Brand href="/">Register</Navbar.Brand>
                            <Nav className="me-auto">
                                <NavDropdown title="menu">
                                    <NavDropdown.Item href="/members/new">New Registration</NavDropdown.Item>
                                    <NavDropdown.Item href="/members">
                                        View Members
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Col>
                        <Col className={'d-flex'}>
                            <Navbar.Brand href="/">Product</Navbar.Brand>
                            <Nav className="me-auto">
                                <NavDropdown title="menu">
                                    <NavDropdown.Item href="/items/new">Create Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/items">
                                        Product List
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                        </Col>
                        <Col className={'d-flex'}>
                            <Navbar.Brand href="/">Order</Navbar.Brand>

                            <Nav className="me-auto">
                                <NavDropdown title="menu">
                                    <NavDropdown.Item href="/order/new">Order Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/orders">
                                        Your Order List
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Col>

                    </Container>

                </Navbar>
                <Outlet />
            </Container>

        </>
    )
}

// <div className="container">
{/*    <div className="jumbotron">*/}
{/*        <h1>HELLO SHOP</h1>*/}
{/*        <p className="lead">register function</p>*/}
{/*        <p>*/}
{/*            <a className="btn btn-lg btn-secondary" href="/members/new">register </a>*/}
{/*            <a className="btn btn-lg btn-secondary" href="/members">registered list</a>*/}
{/*        </p>*/}
{/*        <p className="lead">product </p>*/}
{/*        <p>*/}
{/*            <a className="btn btn-lg btn-dark" href="/items/new">product</a>*/}
{/*            <a className="btn btn-lg btn-dark" href="/items">product list</a>*/}
{/*        </p>*/}
{/*        <p className="lead">order</p>*/}
{/*        <p>*/}
{/*            <a className="btn btn-lg btn-info" href="/order">product order</a>*/}
{/*            <a className="btn btn-lg btn-info" href="/orders">order list</a>*/}
{/*        </p>*/}
{/*    </div>*/}
{/*</div>*/}