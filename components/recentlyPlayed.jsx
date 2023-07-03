import { getRecentlyPlayedTracksForUser } from "@/redux/recents/recentsActions";
import React, { useEffect } from "react";
import { Card, Row, Col, Image, ListGroup, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const RecentlyPlayed = () => {
    const dispatch = useDispatch();
    const recents = useSelector(state => state.recents)
    const loggedIn = useSelector(state => state.user.loggedIn)

    useEffect(() => {
        if (recents.loading == false && recents.items.length == 0 && loggedIn)
            dispatch(getRecentlyPlayedTracksForUser())
    }, [recents.loading, recents.items.length, loggedIn])

    if (loggedIn) {
        if (recents.loading) {
            return (
                <Card className="d-flex align-items-center justify-content-center">
                    <Spinner></Spinner>
                </Card>
            )
        }
        if (recents.errorMsg !== '') {
            return (
                <Card className="d-flex align-items-center justify-content-center">
                    <h3 className="text-danger">Error</h3>
                    <p>{recents.errorMsg}</p>
                </Card>
            )
        }

        return (
            <Card>
                <Card.Header>Recently Played: </Card.Header>
                <ListGroup>
                    {recents.items.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <Row>
                                <Col xs={2}>
                                    <Image fluid rounded src={item.track.album.images[0].url} alt="album art"/>
                                </Col>
                                <Col xs={5}>
                                    {item.track.name}
                                </Col>
                                <Col xs={5}>
                                        {item.track.artists.map((artist, index) => (
                                            <Row key={index}>
                                                <a href={artist.external_urls.spotify}>{artist.name}</a>
                                            </Row>
                                        ))}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        )
    }
}

export default RecentlyPlayed