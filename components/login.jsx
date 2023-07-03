import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const LoginButton = ({ children }) => {
    const router = useRouter();

    return(
        <Button variant="success" onClick={() => router.push('/api/auth/login')}>
            <Container className="d-flex flex-direction-row justify-content-between px-0 align-items-center">
                <span style={{ paddingRight : '5px'}}><FontAwesomeIcon icon={faSpotify} /></span> {children}
            </Container>
        </Button>
    );
}

export default LoginButton;