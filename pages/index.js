import React from 'react';
import HeroSection from '@/components/hero';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => (
    <Container>
        <HeroSection />
        <Container style={{marginTop: "50vh"}}>
            <Row>
                <Col className="text-center">
                    <h3>Features:</h3>
                </Col>
            </Row>
            <h4>Top Categories</h4>
            <p>
                Once logged in, StatsForSpotify allows you to view your top artists, songs, and albums.
                You can choose between statistics from the last four weeks, last six months, or for all time.
            </p>
            <h4>Dashboard</h4>
            <p>
                The dashboard allows you to quickly view some info about your spotify listening habits.
                You can see your top genres ranked by the number of your top artists that create music in that genre.
                You can also see your most recent songs. To be listed, the song must be played for more than thirty seconds.
                The dasboard also lets you see how many Spotify followers you have!
            </p>
            <h4>Recomendations <span className="text-muted">Coming Soon...</span></h4>
            <p>
                This feature allows you to create a playlist of recomended songs mixed with your favorite songs.
                The playlist is automatically added to your Spotify library.
            </p>
        </Container>
    </Container>
)

export default Home;
