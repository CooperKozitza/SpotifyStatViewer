import React from 'react';
import Link from 'next/link';
import { Button, Container, Row, Col } from 'react-bootstrap';
import LoginButton from '@/components/login';

const Home = () => (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-4">Welcome to Spotify Stat Viewer</h1>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <p className="lead">
            Discover your top artists and songs on Spotify. Dive into your listening statistics and explore your musical journey.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
            <LoginButton />
        </Col>
      </Row>
    </Container>
)

export default Home;