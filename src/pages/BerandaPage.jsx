import {Container, Row, Col} from 'react-bootstrap';

//import image
import PlaysoteImage from "../assets/playstore.svg";
import CtaForum from "../assets/img/img-forum.svg";
import IconCtg from "../assets/icons/icon-ctg.svg";

// import data 
import {fiturApps} from "../data/index.js"

const BerandaPage = () => {
  return (
    <div className="beranda">

      {/* HERO SECTION  */}
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

            <Col lg="5" className="pt-lg-0 pt-5">
            <div className='hero-img'>
            {/* <img src="" alt="hero-img"/> */}
            </div>
              
            </Col>
          </Row>
        </Container>
      </header>

      {/* FITUR SECTION */}
      <div className="fitur w-100">
        <Container>
          {/* HEADING FITUR  */}
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>What's Pejuang TB Apps</h1>
              <p className='text-center'>
              Aplikasi Pejuang TB menemani proses kesembuhan TB Anda dan membantu <br/> temukan teman seperjuangan untuk sembuh TB  
              </p>
            </Col>
          </Row>

          {/* KOLOM FITUR  */}
          <Row>
            {/* memanggil data fitur */}
            {fiturApps.map((fitur) => {
              return (
                <Col key = {fitur.id}>
                  <img src={fitur.image} alt="icon by : https://boxicons.com/" className='w-100 mb-4'/>
                  <h5 className='text-center fw-bold'>{fitur.title}</h5>
                  <p className='text-center'>{fitur.text}</p>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      {/* CTA FORUM SECTION  */}
      <div className="cta-forum w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className='d-flex align-items-center'>
              {/* IMAGE CTA FORUM  */}
              <Col lg = "6">
                <img src={CtaForum} alt="" className='img-forum'/>
              </Col>
              
              {/* TEXT CTA FORUM  */}
              <Col className='text-cta' lg = "6">
                <p className='text1'>Forum Komunitas TB</p>
                <h2>
                  Temukan pejuang sembuh TB lainnya secara online
                </h2>

                <p className='text2'>
                  Pejuang TB menyediakan  forum komunitas dan pengingat minum obat. Dimana Anda dapat menemukan pejuang TB sembuh lainnya. Mari berbagi dan saling memberi semangat satu sama lain.
                </p>

                <div className='d-flex fw-bold'>
                  <img src={IconCtg} alt=""/>
                  <p className='px-2'>Komunikasi mudah semasa Pejuang TB</p>
                </div>
                <div className='d-flex fw-bold'>
                  <img src={IconCtg} alt="" />
                  <p className='px-2'>Saling berbagi, memotvasi sembuh bersama</p>
                </div>

                <button className='btn btn-primary mt-4 px-4 py-2'>Gabung Sekarang!</button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* APPS DOWNLOAD SECTION  */}
        <div className='app-download w-100 min-vh-100'>
          <Container>
            <Row>
              <Col>
                <p className='text1'>Download Aplikasi</p>
                <h1>
                  Dapatkan <span>Aplikasi Pejuang TB</span>
                </h1>
                <p className='text2'>Aplikasi kami tersedia di Play Store secara gratis, segera unduh untuk menemani kesembuhanmu dari TB dan temukan sesama pejuang TB dengan berbagai fitur kemudahan yang Anda dapatkan</p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default BerandaPage