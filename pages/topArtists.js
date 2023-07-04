import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row, Spinner, Image, Card, Nav, Tab, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Podium from "@/components/podium";
import TopItemsCard from "@/components/topItemsCard";
import { getArtistsForUser } from "@/redux/artists/artistsActions";

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
            <br></br>
            <TopItemsCard startIndex={3} reducer={artists} getAction={getArtistsForUser} loading={artists.loading} error={artists.errorMsg} />
        </Container>   
    )
}

export default TopArtists