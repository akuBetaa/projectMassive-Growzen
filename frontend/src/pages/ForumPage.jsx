import { Container, Row, Col, Nav, Tab } from "react-bootstrap";


import ForumSatu from "../components/forum/ForumSatu";
import ForumDua from "../components/forum/ForumDua";
import { ForumTiga } from "../components/forum/ForumTiga";
import ForumEmpat from "../components/forum/ForumEmpat";

// import image 
import iconSatu from "../assets/icons/icon-discussion.svg";
import iconDua from "../assets/icons/icon-myquestion.svg";
import iconTiga from "../assets/icons/icon-myparticipations.svg";



const ForumPage = () => {
  return (
    <div className="forum">
      <div>
        <Container>
          <Row className="">
            <Col  className="header">
              {/* <p className='text'>
                Edukasi Tubercolosis
              </p> */}
              <h2 className=' fw-bold'>Forum Pejuang TB</h2>
            </Col>
          </Row>
        </Container>
        </div>

        <div>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              {/* SECTION MENU FORUM  */}
              <Col sm={3} className="menu">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <div className="d-flex menu-list">
                        <img src={iconSatu} alt="" />
                        <p className="ms-3 pt-3">Discussion</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                    <div className="d-flex menu-list">
                        <img src={iconDua} alt="" />
                        <p className="ms-3 pt-3">My Question</p>
                      </div>
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="three">
                    <div className="d-flex menu-list">
                        <img src={iconTiga} alt="" />
                        <p className="ms-3 pt-3">My Participations</p>
                      </div>
                      
                      </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              {/* SECTION CONTENT FORUM  */}
              <Col sm={9} className="">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <ForumSatu />
                    <ForumDua />
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="second">
                  <ForumTiga />
                  </Tab.Pane>

                  <Tab.Pane eventKey="three">
                    <ForumEmpat />
                  </Tab.Pane>
                    
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

        </Container>
      </div>
    </div>

  )
}

export default ForumPage