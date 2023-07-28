import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LoginButton from "./login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const HeroSection = () => {
    let loggedIn = useSelector(state => state.user.loggedIn);
    let router = useRouter();

    return (
        <Container style={{
            height: "50vh",
            background: "linear-gradient(135deg, #343a40, #1db954)",
            minWidth: '100vw',
            position: "absolute",
            top: '0',
            left: '0',
            marginTop: '50px',
        }} className="d-flex p-0 flex-column justify-content-end align-items-start">
            <Row className="align mx-auto px-2" style={{maxWidth: "80vw", marginBottom: '20px'}}> 
                <Col lg={7} className="p-4 text-light bg-dark rounded">
                    <h1>Unveil Your Music Taste</h1>
                    <p>Connect with Spotify and explore your listening statistics, top tracks, artists, albums, and get tailored recommendations.</p>
                    <span className="d-flex justify-content-center justify-content-sm-start">
                        { !loggedIn 
                            ? <LoginButton>Login With Spotify</LoginButton>
                            : <Button 
                                variant="outline-light" 
                                onClick={() => router.push('/dashboard')}>
                                    Go to your dashboard <FontAwesomeIcon icon={faCaretRight} />
                            </Button>
                        }
                    </span>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroSection;
