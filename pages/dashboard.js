import { login } from '@/redux/user/userActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import querystring from "querystring"
import { setAccessToken } from '@/redux/authorization/authActions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    
    const router = useRouter(); 

    useEffect(() => {
        if (!user.loggedIn) {
            const qs = querystring.parse(router.asPath.split('?')[1])
            dispatch(setAccessToken(qs))
            dispatch(login())
        }
    }, []);

    return (
        <Container>
            <Row>
                <Row>
                    <Col>
                        <img src={user.avatar.url}></img>
                    </Col>
                    <Col>
                        <h2>{user.displayName || 'No Username Found'}</h2>
                        <p>{user.email || 'no email found'}</p>
                    </Col>
                </Row>
            </Row>
            <Row>
                <h3>Recently Played</h3>
            </Row>
        </Container>
    )
}

export default Dashboard;