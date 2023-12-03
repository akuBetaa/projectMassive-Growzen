import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import Comments from "../components/comments/Comments"

const ForumPage = () => {
  return (
    <div className="forum">
      <div>
        <Container>
          <Row className="">
            <Col  className="xxx">
              <p className='text'>
                Edukasi Tubercolosis
              </p>
              <h2 className=' fw-bold'>Artikel Seputar TBC</h2>
            </Col>
          </Row>
        </Container>
        </div>

        <div>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3} className="">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9} className="">
                <Tab.Content>
                  <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Comments />
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