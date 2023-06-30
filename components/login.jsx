import { authorize } from "@/redux/authorization/authActions";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const LoginButton = ({ children }) => {
    const dispatch = useDispatch();

    return(
        <Button variant="success" onClick={() => { dispatch(authorize()) }}>
            <Container className="d-flex flex-direction-row justify-content-between px-0 align-items-center">
                <span style={{ paddingRight : '5px'}}><FontAwesomeIcon icon={faSpotify} /></span> {children}
            </Container>
        </Button>
    );
}

export default LoginButton;