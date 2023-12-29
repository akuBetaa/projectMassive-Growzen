import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import jwt_decoded from "jwt-decode";
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

const SuksesPage = () => {
    const [ name, setName ] = useState('');
    // const [ token, setToken ] = useState('');
    const [msg, setMsg] = useState('')

    // useEffect (() => {
    //     getMe();
    // }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
              const response = await axios.get('http://localhost:3008/me');
              console.log(response);
              setName(response.data.name)
            } catch (error) {
                setMsg(error.response.data.msg)
            }
          };
        fetchUser()
    }, []);

    // console.log(name);
    
    
  return (
    <div className='lamansukses'>
        <div className='className="w-100 min-vh-100 d-flex align-items-center"'>
            <Container >
                <Row className='align-items-center text-center laman'>
                    <Col>
                    <h2>Selamat Datang {name} </h2>
                    </Col>
                </Row>
                
            </Container>
        </div>
    </div>
    )
}

export default SuksesPage