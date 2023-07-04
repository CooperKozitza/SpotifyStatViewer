import { getArtistsForUser } from "@/redux/artists/artistsActions"
import { useEffect } from "react"
import { Card, Col, ListGroup, OverlayTrigger, ProgressBar, Row, Spinner, Tooltip } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

const GenreGraph = () => {
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artists)
    const loggedIn = useSelector(state => state.user.loggedIn)

    useEffect(() => {
        if (artists.loading == false && artists.items.length == 0 && loggedIn)
            dispatch(getArtistsForUser())
    }, [artists.loading, artists.items.length, loggedIn])



    if (loggedIn) {
        if (artists.loading) {
            return (
                <Card className="d-flex align-items-center justify-content-center">
                    <Spinner></Spinner>
                </Card>
            )
        }
        if (artists.errorMsg !== '') {
            return (
                <Card className="d-flex align-items-center justify-content-center">
                    <h3 className="text-danger">Error</h3>
                    <p>{artists.errorMsg}</p>
                </Card>
            )
        }

        const genreCounts = artists.items.reduce((count, artist) => {
            artist.genres.forEach((genre) => {
              count[genre] = (count[genre] || 0) + 1;
            });
            return count;
        }, {})

        const genres = Object.entries(genreCounts)
        .map(([genre, count]) => ({ genre, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

        const totalGenreCount = genres.reduce((sum, { count }) => sum + count, 0);
        
        return (
            <Card style={{height: '100%'}}>
                <Card.Header>Genres: </Card.Header>
                <ListGroup>
                    {genres.map((genre, index) => (
                        <ListGroup.Item key={index}>
                            <Row>
                                <Col>
                                    {genre.genre}
                                </Col>
                            </Row>
                            <Row>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-${index}`}>
                                        {`${(genre.count / (totalGenreCount || 1) * 100).toFixed(0)}%`}
                                        </Tooltip>
                                    }
                                >
                                    <Col>
                                        <ProgressBar
                                            now={genre.count / (totalGenreCount || 1) * 100}
                                            min={0}
                                            max={100}
                                        />
                                    </Col>
                                </OverlayTrigger>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        )
    }
}

export default GenreGraph