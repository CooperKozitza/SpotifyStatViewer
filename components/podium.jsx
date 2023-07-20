import { useEffect, useState } from "react"
import { Container, Col, Row, Image } from "react-bootstrap"

const Podium = (props) => {
    let { items } = props

    const [horizontalView, setHorizontalView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHorizontalView(window.innerWidth < 450);
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
            <Row className="bg-secondary p-2 m-4 rounded">
                <Container style={{maxHeight: '400px'}}>
                    <Row className="g-2 p-2 justify-content-start align-items-center">
                        <Col className="p-2 rounded bg-dark text-light text-end" xs={8}>
                            <Row className="align-items-center" >
                                <Col>
                                    <h1>1</h1>
                                    {items[0].name || null}
                                </Col>                         
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Image fluid 
                                roundedCircle
                                className="m-2" 
                                src={items[0].images[0].url || "https://i.scdn.co/image/ab6761610000517458efbed422ab46484466822b"}
                                alt="Podium Item 1" 
                            />
                        </Col>                    
                    </Row>
                    <Row className="g-2 p-2 justify-content-start align-items-center">
                        <Col className="p-2 rounded bg-dark text-light text-end" xs={6}>
                            <Row className="align-items-center">
                                <Col>
                                    <h1>2</h1>
                                    {items[1].name || null}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Image 
                                fluid 
                                roundedCircle 
                                className="m-2"
                                src={items[1].images[0].url || "https://i.scdn.co/image/ab6761610000517458efbed422ab46484466822b"}
                                alt="Podium Item 2"
                            />
                        </Col>
                    </Row>
                    <Row className="g-2 p-2 justify-content-start align-items-center">
                        <Col className="p-2 rounded bg-dark text-light text-end" xs={4}>
                            <Row className="align-items-center">
                                <Col>
                                    <h1>3</h1>
                                    {items[2].name || null}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Image 
                                fluid 
                                roundedCircle 
                                className="m-2"
                                src={items[2].images[0].url || "https://i.scdn.co/image/ab6761610000517458efbed422ab46484466822b"}
                                alt="Podium Item 2"
                            />
                        </Col>
                    </Row>
                </Container>
            </Row>
        )
    
    return (
        <Row className="bg-secondary p-2 m-4 rounded">
            <Container style={{ height: '300px', maxWidth: '400px' }}>
                <Row className="h-100 g-2 p-2">
                    <Col xs={4} className="g-2 h-100 d-flex flex-column justify-content-end">
                        <Row>
                            <Image 
                                fluid 
                                roundedCircle 
                                className="m-2"
                                src={items[2].images[0].url || "https://i.scdn.co/image/ab6761610000517458efbed422ab46484466822b"}
                                alt="Podium Item 2"
                            />
                        </Row>
                        <Row className="justify-content-center text-center bg-dark text-light h-30 rounded m-2 py-2">
                            {items[2].name || null}<h1> 3</h1>
                        </Row>
                    </Col>
                    <Col xs={4} className="g-2 h-100 d-flex flex-column justify-content-end">
                        <Row>
                            <Image 
                                fluid 
                                roundedCircle 
                                className="m-2"
                                src={items[0].images[0].url || "https://i.scdn.co/image/ab6761610000517458efbed422ab46484466822b"}
                                alt="Podium Item 2"
                            />
                        </Row>
                        <Row className="justify-content-center text-center bg-dark text-light h-50 rounded m-2 py-2">
                            {items[0].name || null}<h1> 1</h1>
                        </Row>
                    </Col>
                    <Col xs={4} className="g-2 h-100 d-flex flex-column justify-content-end">
                        <Row>
                            <Image 
                                fluid 
                                roundedCircle 
                                className="m-2"
                                src={items[1].images[0].url || "https://i.scdn.co/image/ab6761610000517458efbed422ab46484466822b"}
                                alt="Podium Item 2"
                            />
                        </Row>
                        <Row className="justify-content-center text-center bg-dark text-light h-70 rounded m-2 py-2">
                            {items[1].name || null}<h1> 2</h1>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Podium
