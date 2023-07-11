import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginButton from "./login";

const HeroSection = () => {
    return (
        <Container className="p-0" fluid>   
            <Row>
                <Container>
                    <Row>
                        <Col md={7}>
                            <h1>Unveil Your Music Taste</h1>
                            <p>Connect with Spotify and explore your listening statistics, top tracks, artists, albums, and get tailored recommendations.</p>
                            <span className="d-flex justify-content-center justify-content-sm-start">
                                <LoginButton>Login With Spotify</LoginButton>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
}

export default HeroSection;
