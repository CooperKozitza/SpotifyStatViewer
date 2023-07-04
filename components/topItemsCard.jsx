const { useState } = require("react")
const { Card, Nav, Tabs, Tab, ListGroup, Spinner, Row, Col, Image } = require("react-bootstrap")
const { useDispatch } = require("react-redux")

const TopItemsCard = (props) => {
    const { startIndex, reducer, getAction, loading } = props
    const [timePeriod, setTimePeriod] = useState('medium_term')

    const dispatch = useDispatch();

    if (loading) {
        return (
            <Card>
                <Tab.Container activeKey={timePeriod}>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey={'short_term'} disabled>This Month</Nav.Link>                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={'medium_term'} disabled>Last Six Months</Nav.Link>                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={'long_term'} disabled>All Time</Nav.Link>                            
                        </Nav.Item>
                    </Nav>
                </Tab.Container>
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <Spinner />
                </Card.Body>
            </Card>
        )
    }

    if (props.error != '') {
        return (
            <Card>
                <Tab.Container activeKey={timePeriod}>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey={'short_term'} disabled>This Month</Nav.Link>                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={'medium_term'} disabled>Last Six Months</Nav.Link>                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={'long_term'} disabled>All Time</Nav.Link>                            
                        </Nav.Item>
                    </Nav>
                </Tab.Container>
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <h3>Error</h3>
                    <p>{error}</p>
                </Card.Body>
            </Card>
        )
    }

    const handleTabChange = tab => {
        setTimePeriod(tab)
        dispatch(getAction(tab))
        console.log(tab)
    }

    const renderListItems = () => (
        reducer.items.map((item, index) => {
            if (index < startIndex)
                return null
            return (
                <ListGroup.Item key={index}>
                    <Row className="align-items-center">
                        <Col xs={2} md={1} className="text-center">
                            <h2>{index + 1}.</h2>
                        </Col>
                        <Col xs={2} className="p-0 p-md-2">
                            <Image fluid rounded src={item.images[0].url} alt="album art"/>
                        </Col>
                        <Col xs={8}>
                            {item.name}
                        </Col>
                    </Row>
                </ListGroup.Item>
            )
        })
    )
        
    return (
        <Card>
            <Card.Header>
                <Nav variant="pills" activeKey={timePeriod} onSelect={handleTabChange}>
                    <Nav.Item>
                        <Nav.Link eventKey='short_term'>This Month</Nav.Link>                            
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='medium_term'>Last Six Months</Nav.Link>                            
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='long_term'>All Time</Nav.Link>                            
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <ListGroup>
                    {renderListItems()}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default TopItemsCard