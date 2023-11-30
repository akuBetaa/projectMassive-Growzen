import { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

//import link
import { Link } from "react-router-dom";

//import image
import LogoImage from "/public/logo2.png"
import PlayStoreImg from "../assets/playstore.svg"

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>
            <img src={LogoImage} alt="" />
          </Modal.Title> */}
        </Modal.Header>


        <Modal.Body className='mb-5'>
          <div className='logoImg mt-2 mb-4'>
            <img src={LogoImage} alt="logo=image"/>
          </div>

          <div className='mb-3'>
            <p className='my-1'>Welocome back 👋</p>
            <h3>Login to your account</h3>
          </div>

            <>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='password' autoFocus/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='my-2'>
                        Login
                    </Button>
                </Form>
          </>

          <div className='text-center mt-3'>
            <p>
              Don't  have an account?  
              <Link to="forum" className='signup ms-2'>Sign up</Link>
            </p>

            <p>Or</p>
          </div>

            <div className='unduh'>
              <p>
                Dapatkan Aplikasi <br />di Play Store
              </p>
              <img src={PlayStoreImg} alt="" />
            </div>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Example;