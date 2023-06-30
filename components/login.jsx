import { authorize } from "@/redux/authorization/authActions";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const LoginButton = () => {
    const dispatch = useDispatch();

    return(
        <Button variant="success" onClick={() => {dispatch(authorize())}}>
            <FontAwesomeIcon icon={faSpotify} /> Login With Spotify
        </Button>
    );
}

export default LoginButton;