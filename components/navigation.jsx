import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from 'next/router'
import LoginButton from "./login";
import { Container } from "react-bootstrap";

const Navigation = () => {
    const router = useRouter();

    const navigateTo = (path) => {
        router.push(path);
    }

    return (
        <Navbar bg="light" variant="dark" expand="lg" className="glass" fixed="top">
            <Container>
                <Navbar.Brand onClick={() => navigateTo("/")}>Spotify Stat Viewer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container>
                        <Nav className="mr-auto d-lg-flex align-items-center">
                            <Nav.Link onClick={() => navigateTo("/top-albums")}>Top Albums</Nav.Link>
                            <Nav.Link onClick={() => navigateTo("/top-artists")}>Top Artists</Nav.Link>
                            <Nav.Link onClick={() => navigateTo("/top-songs")}>Top Songs</Nav.Link>
                        </Nav>
                    </Container>
                    <LoginButton>Login</LoginButton>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
