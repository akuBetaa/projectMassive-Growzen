import React from 'react'
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

// import data 
import {postArtikel} from "../data/index.js"

const PostComponents = () => {
  return (
    <div className="artikel">
        <Container>
            <Row >
                {postArtikel.map((artikel) => {
                    return (
                    <Col key={artikel.id} className='kartu'>
                        <h5 className="fw-bold fs-4 mb-2">{artikel.title}</h5>
                        <p>{artikel.text}</p>
                        <Button className='mt-2'>Selengkapnya</Button>

                        {/* <Card className='kartu p-2'>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-4 mb-2'>{artikel.title}</Card.Title>
                            <Card.Text>{artikel.text}</Card.Text>
                            <Button className='mt-2'>Selengkapnya</Button>
                        </Card.Body>
                        </Card> */}
                    </Col>
                    )
                })}
                </Row>
        </Container>
    </div>
  )
}

export default PostComponents