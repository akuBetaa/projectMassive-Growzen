import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import jwt_decoded from "jwt-decode";
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

const SuksesPage = () => {

    const [name, setName] = useState('');
    // const [token, setToken] = useState('');
    const token = localStorage.getItem("token")
    console.log(token);


    // const refreshToken = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3005/users');
    //         // if (response.data && response.data.accessToken) {
    //         setToken(response.data.accessToken);

    //         // const decoded = jwtDecode(response.data.accessToken);
    //         // console.log(decoded);
    //         // } else {
    //         //     //console.error('Access token not found in response data');
    //         // }
    //     } catch (error) {
    //         console.error('Error refreshing token:', error);
    //     }
    // };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await axios.get('http://localhost:3005/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(data);
                setName(data.data.name)
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
        // refreshToken();
    }, []);
    console.log(name);

    return (
        <div className='lamansukses'>
            <div className='className="w-100 min-vh-100 d-flex align-items-center"'>
                <Container >
                    <Row className='align-items-center text-center laman'>
                        <Col>
                            <h2>Selamat Datang {name}
                            </h2>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default SuksesPage