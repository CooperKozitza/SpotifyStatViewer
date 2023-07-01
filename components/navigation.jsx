import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from 'next/router'
import LoginButton from "./login";
import { Container } from "react-bootstrap";
import ProfilePicture from "./profile";

const Navigation = () => {
    const router = useRouter();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand onClick={() => router.push("/")}>Spotify Stat Viewer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container>
                        <Nav className="mr-auto d-lg-flex align-items-center">
                            <Nav.Link onClick={() => router.push("/top-albums")}>Top Albums</Nav.Link>
                            <Nav.Link onClick={() => router.push("/top-artists")}>Top Artists</Nav.Link>
                            <Nav.Link onClick={() => router.push("/top-songs")}>Top Songs</Nav.Link>
                        </Nav>
                    </Container>
                    <ProfilePicture></ProfilePicture>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
