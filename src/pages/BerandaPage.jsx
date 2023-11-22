import {Container, Row, Col} from 'react-bootstrap';
import HeroImage from "../assets/heroImage.svg"
import PlaysoteImage from "../assets/playstore.svg"

const BerandaPage = () => {
  return (
    <div className="beranda">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className='header-box d-flex align-items-center'>
            <Col lg="7">
              <h1 className='mb-4'>
                Bantu Kesembuhanmu <br /> Mari Eliminasi TBC mulai <br/> dari <span>Diri Sendiri</span>
              </h1>
              <p className='mb-4'>
                Dapatkan komunitas pejuang TBC dan pengingat obat dalam genggaman di
                </p>
              <img src={PlaysoteImage} alt="playstore-img" />
            </Col>

            <Col lg="5">
            <div className='hero-img'>
            <img src={HeroImage} alt="hero-img"/>
            </div>
              
            </Col>
          </Row>
        </Container>
      </header>
      <div className="hero w-100 min-vh-100"></div>
    </div>
  )
}

export default BerandaPage