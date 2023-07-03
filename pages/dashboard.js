import { login } from '@/redux/user/userActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import querystring from "querystring";
import { setAccessToken } from '@/redux/authorization/authActions';
import styles from './dashboard.module.css';
import GenreGraph from '@/components/genreGraph';
import RecentlyPlayed from '@/components/recentlyPlayed';
import LogoutButton from '@/components/logout';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    
    const router = useRouter(); 

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            if (!user.loggedIn) {
                const qs = querystring.parse(router.asPath.split('?')[1])
                if (!qs)
                    router.push('/api/auth/login')
                dispatch(setAccessToken(qs))
                dispatch(login())

                router.push('/dashboard')
            }
        }
    }, []);

    return (
        <Container>
            <Row className="g-4">
                <Col md={8}>
                    {user.loggedIn ?
                        <Card style={{height: '100%'}}>  
                            <Card.Header>Your Profile:</Card.Header>
                            <Card.Body className="d-flex align-items-center flex-column">
                                <Card.Img src={user.user.images[0].url} className={styles.avatar} />
                                <Card.Title>{user.user.display_name || 'No Username Found'}</Card.Title>
                                <Card.Subtitle>
                                    <p className="text-muted">{user.user.email || 'No Email Found'}</p>
                                </Card.Subtitle>
                                <Row>
                                    <Col>
                                        <b>Followers: </b>{user.user.followers.total}
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <LogoutButton />
                            </Card.Footer>
                        </Card>
                    : <Spinner />}
                </Col>
                <Col md={4}>
                    <GenreGraph />
                </Col>
                <Col>
                    <RecentlyPlayed />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;