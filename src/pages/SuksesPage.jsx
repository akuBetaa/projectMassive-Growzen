import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import jwt_decoded from "jwt-decode";
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

const SuksesPage = () => {
    const [ name, setName ] = useState('');
    const [ token, setToken ] = useState('');

    useEffect (() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
          const response = await axios.get('http://localhost:3008/token');
          setToken(response.data.accessToken);
    
          const decoded = jwtDecode(response.data.accessToken);
          console.log(decoded);
        } catch (error) {
        //   console.error('Error refreshing token:', error);
        }
      };
    
    // const refreshToken = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3005/token');
    //         // if (response.data && response.data.accessToken) {
    //            // setToken(response.data.accessToken);

    //             const decoded = jwtDecode(response.data.accessToken);
    //             console.log(decoded);
    //         // } else {
    //         //     //console.error('Access token not found in response data');
    //         // }
    //     } catch (error) {
    //         console.error('Error refreshing token:', error);
    //     }
    // };
    
    
  return (
    <div className='lamansukses'>
        <div className='className="w-100 min-vh-100 d-flex align-items-center"'>
            <Container >
                <Row className='align-items-center text-center laman'>
                    <Col>
                    <h2>Selamat Datang </h2>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default SuksesPage