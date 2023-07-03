import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row, Spinner, Image, Card, Nav, Tab, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Podium from "@/components/podium";

const TopArtists = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.user.loggedIn)
    const artists = useSelector(state => state.artists)

    useEffect(() => {
        if (artists.loading == false && artists.items.length == 0 && loggedIn)
            dispatch(getArtistsForUser())
    }, [artists.items.length, artists.loading, loggedIn]);

    if (artists.loading)
        return (
            <Container className="d-flex justify-content-center">
                <Spinner></Spinner>
            </Container>
        )
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Top Artists</h1>
                </Col>
            </Row>
            <Podium items={artists.items} />
            <Container>
                <Card>
                    <Tab.Container>
                        <Card.Header>
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="shortTerm">Short Term</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="medium">Medium</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="long">Long</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey="shortTerm">
                                    <ListGroup>
                                        <ListGroup.Item>Example entry 1 (Short Term)</ListGroup.Item>
                                        <ListGroup.Item>Example entry 2 (Short Term)</ListGroup.Item>
                                        <ListGroup.Item>Example entry 3 (Short Term)</ListGroup.Item>
                                    </ListGroup>
                                </Tab.Pane>
                                <Tab.Pane eventKey="medium">
                                    <ListGroup>
                                        <ListGroup.Item>Example entry 1 (Medium)</ListGroup.Item>
                                        <ListGroup.Item>Example entry 2 (Medium)</ListGroup.Item>
                                        <ListGroup.Item>Example entry 3 (Medium)</ListGroup.Item>
                                    </ListGroup>
                                </Tab.Pane>
                                <Tab.Pane eventKey="long">
                                    <ListGroup>
                                        <ListGroup.Item>Example entry 1 (Long)</ListGroup.Item>
                                        <ListGroup.Item>Example entry 2 (Long)</ListGroup.Item>
                                        <ListGroup.Item>Example entry 3 (Long)</ListGroup.Item>
                                    </ListGroup>
                                </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>
                    </Tab.Container>
                </Card>
            </Container>
        </Container>   
    )
}

export default TopArtists