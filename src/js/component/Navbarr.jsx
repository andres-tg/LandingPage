import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const navbar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#Home">Home</Nav.Link>
					<Nav.Link href="#link">About</Nav.Link>
					<Nav.Link href="#link">Services</Nav.Link>
					<Nav.Link href="#link">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
