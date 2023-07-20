import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from 'next/router'
import LoginButton from "./login";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import LogoutButton from "./logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    const router = useRouter();
    const loggedIn = useSelector(state => state.user.loggedIn)

    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Brand className="justify-self-center" onClick={() => router.push("/")}>Spotify Stat Viewer</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container>
                        <Nav className="mr-auto d-lg-flex align-items-center">
                            <Nav.Link onClick={() => router.push("/topAlbums")} disabled>Top Albums</Nav.Link>
                            <Nav.Link onClick={() => router.push("/topArtists")}>Top Artists</Nav.Link>
                            <Nav.Link onClick={() => router.push("/topTracks")} disabled>Top Tracks</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
                <div className="d-flex flex-row align-items-center">
                    <Navbar.Text className="nav-login-logout">
                        {loggedIn ? <LogoutButton /> : <LoginButton>Log In</LoginButton>}
                    </Navbar.Text>
                    <Navbar.Text className="nav-login-logout">
                        {loggedIn ? <a onClick={() => router.push('/dashboard')}><FontAwesomeIcon icon={faUser} /></a>: null}
                    </Navbar.Text>
                </div>
            </Container>
        </Navbar>
    );
};

export default Navigation;
