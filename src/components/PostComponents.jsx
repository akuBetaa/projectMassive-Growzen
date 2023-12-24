import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import data 
import {postArtikel} from "../data/article.js"

const PostComponents = () => {
  return (
    <div className="artikel">
        <Container>
            <Row >
                {postArtikel.map((article) => {
                    return (
                    <Col key={article.id} className='kartu'>
                        <img className='w-100' src={article.image} alt="" />
                        <div className='text-artikel'>
                            <h5 className="fw-bold fs-4 mb-2">{article.title}</h5>
                            <p>{article.text}</p>
                            <Link to={`/artikel/${article.id}`}>
                                <Button className='mt-2'>Selengkapnya</Button>
                            </Link>
                        </div>
                    </Col>
                    )
                })}
                </Row>
        </Container>
    </div>
  )
}

export default PostComponents
