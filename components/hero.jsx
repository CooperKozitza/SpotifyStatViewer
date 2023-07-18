import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginButton from "./login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
    return (
        <Container style={{
            height: "50vh",
            background: "linear-gradient(135deg, #343a40, #1db954)",
            minWidth: '100vw',
            position: "absolute",
            top: '0',
            left: '0',
            marginTop: '60px',
        }} className="d-flex flex-column justify-content-end align-items-start">
            <Row className="align mx-auto" style={{maxWidth: "960px"}}> 
                <Col md={7} className="p-4 text-light bg-dark rounded">
                    <h1>Unveil Your Music Taste</h1>
                    <p>Connect with Spotify and explore your listening statistics, top tracks, artists, albums, and get tailored recommendations.</p>
                    <span className="d-flex justify-content-center justify-content-sm-start">
                        <LoginButton>Login With Spotify</LoginButton>
                    </span>
                </Col>
            </Row>
            <Row className="align mx-auto" style={{maxWidth: "960px"}}> 
                <Col className="my-2">
                    <FontAwesomeIcon icon={faCaretDown} />
                </Col>
            </Row>
        </Container>
    );
}

export default HeroSection;
