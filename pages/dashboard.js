import { login } from '@/redux/user/userActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Container, Row, Col, Spinner, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import querystring from "querystring";
import { setAccessToken } from '@/redux/authorization/authActions';
import { getRecentlyPlayedTracks } from '@/redux/recents/recentsActions';
import styles from './dashboard.module.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const recents = useSelector(state => state.recents)
    
    const router = useRouter(); 

    useEffect(() => {
        if (!user.loggedIn) {
            const qs = querystring.parse(router.asPath.split('?')[1])
            if (!qs)
                router.push('/api/auth/login')
            dispatch(setAccessToken(qs))

            dispatch(login())
        }
        if (recents.loading == false && recents.items.length == 0)
            dispatch(getRecentlyPlayedTracks())
    }, []);

    return (
        <Container>
            <Container className={styles.profile + ' glass'} >
                <Image fluid src={user.avatar.url} className={styles.avatar} />
                <Container className="glass px-2" style={{marginRight: '10px'}}>
                    <h3>{user.displayName || 'No Username Found'}</h3>
                    <p className='text-muted'>{user.email || 'no email found'}</p>
                </Container>
            </Container>
            <Container className={styles.recents + ' glass'}>
                <Row className={styles.recentsHeader}>
                    <h3>Recently Played</h3>
                </Row>
                {recents.loading ? <Spinner></Spinner> : recents.items.map((item, index) => (
                    <Row key={index} className={styles.track + ' glass'} >
                        <Col xs={2} className="px-0">
                            <Image fluid src={item.track.album.images[0].url} className={styles.albumCover} />
                        </Col>
                        <Col xs={5}>
                            {item.track.name}
                        </Col>
                        <Col xs={5}>
                            {item.track.artists.map((artist) => (
                                <Row>
                                    <a href={artist.external_urls.spotify}>{artist.name}</a>
                                </Row>
                            ))}
                        </Col>
                    </Row>
                ))}
            </Container>
        </Container>
    )
}

export default Dashboard;