import PostComponents from "../components/PostComponents"
import {Container, Row, Col} from 'react-bootstrap'

const ArtikelPage = () => {
  return (
    <div className="artikel-page">
      <Container>
        <Row>
            <Col  className="post text-center">
                <p className='text'>
                  Edukasi Tubercolosis  
                </p>
                <h2 className=' fw-bold'>Artikel Seputar TBC</h2>
            </Col>
        </Row>
        <Row>
          <div className="mx-3">
            <PostComponents/>
          </div>
        </Row>

      </Container>

    </div>
  )
}

export default ArtikelPage