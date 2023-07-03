import { useEffect, useState } from "react"
import { Container, Col, Row, Image } from "react-bootstrap"

const Podium = (props) => {
    let { items } = props

    const [horizontalView, setHorizontalView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHorizontalView(window.innerWidth < 576);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    if (items.length < 3)
        return null
    if (items.length > 3)
        items = items.slice(0, 3)
    
    if (horizontalView)
        return (
            <Container style={{maxHeight: '400px'}}>
                <Row className="g-2 p-2 justify-content-start">
                    <Col className="p-2 rounded bg-dark text-light text-end" xs={8}>
                        <Row className="align-items-center" >
                            <Col>
                                <h1>1</h1>
                                {items[0].name}
                            </Col>                         
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Image fluid src={items[0].images[0].url} alt="Podium Item 1" />
                    </Col>                    
                </Row>
                <Row className="g-2 p-2 justify-content-start">
                    <Col className="p-2 rounded bg-dark text-light text-end" xs={6}>
                        <Row className="align-items-center">
                            <Col>
                                <h1>2</h1>
                                {items[1].name}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Image fluid src={items[1].images[0].url} alt="Podium Item 2" />
                    </Col>
                </Row>
                <Row className="g-2 p-2 justify-content-start">
                    <Col className="p-2 rounded bg-dark text-light text-end" xs={4}>
                        <Row className="align-items-center">
                            <Col>
                                <h1>3</h1>
                                {items[2].name}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Image fluid src={items[2].images[0].url} alt="Podium Item 3" />
                    </Col>
                </Row>
            </Container>
        )
    
    return (
        <Container style={{ height: '300px', maxWidth: '400px' }}>
            <Row className="h-100 g-2 p-2">
                <Col xs={4} className="g-2 h-100 d-flex flex-column justify-content-end">
                    <Row>
                        <Image src={items[2].images[0].url} alt="Podium Item 3" />
                    </Row>
                    <Row className="justify-content-center text-center bg-dark text-light h-30 rounded m-2">
                        {items[2].name}<h1> 3</h1>
                    </Row>
                </Col>
                <Col xs={4} className="g-2 h-100 d-flex flex-column justify-content-end">
                    <Row>
                        <Image src={items[0].images[0].url} alt="Podium Item 1" />                    
                    </Row>
                    <Row className="justify-content-center text-center bg-dark text-light h-50 rounded m-2">
                        {items[0].name}<h1> 1</h1>
                    </Row>
                </Col>
                <Col xs={4} className="g-2 h-100 d-flex flex-column justify-content-end">
                    <Row>
                        <Image src={items[1].images[0].url} alt="Podium Item 2" />                    
                    </Row>
                    <Row className="justify-content-center text-center bg-dark text-light h-70 rounded m-2">
                        {items[1].name}<h1> 2</h1>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Podium