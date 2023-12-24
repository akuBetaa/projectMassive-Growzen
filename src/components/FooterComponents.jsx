import {Container, Row, Col} from 'react-bootstrap';;
import { Link } from "react-router-dom";

//import logo
import LogoImage from "../assets/logo/logo-tb.png";
import PlaysoteImage from "../assets/playstore.svg";

const FooterComponents = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row>
          <Col className='col-lg-4'>
            <img src={LogoImage} alt="logo-img" />
            <p>
              Aplikasi Pejuang TB menemani proses kesembuhan TB Anda 
              dan membantu temukan teman seperjuangan 
              untuk sembuh TB  
            </p>
          </Col>
          
          <Col className ="d-flex flex-column col-lg-2 pt-3">
            <h5 className="fw-bold">SiteMap</h5>
            <Link to="/">Beranda</Link>
            <Link to="artikel">Artikel</Link>
            <Link to="forum">Forum</Link>

          </Col>
          
          <Col className='col-lg-3 pt-3'>
           <h5 className='fw-bold'>Temukan Sesama PejuangTB</h5>
           <Link to="/forum">
            <button className='btn-gabung btn'>Gabung Forum</button>
           </Link>
          </Col>
          
          <Col className='col-lg-3 pt-3'>
           <h5 className='fw-bold'>Download Aplikasi</h5>
           <img src={PlaysoteImage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponents