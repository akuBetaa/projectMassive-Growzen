import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './forum.css'
import ImgUser from '../../assets/img/user/beta.png'

const ForumSatu = () => {
    return (
        <div className='formuser'>
            <Row>
                <Col>
                    <div className='d-flex user'>
                        <img src={ImgUser} alt="" />
                        <h5 className='ms-2 mt-3'>Beta Nurul Awwalin</h5>
                    </div>
                </Col >
            </Row>

            <Row>
                <form action="">
                    <textarea name="" id="" rows="4" className='w-100'></textarea> <br />
                    <button className='btn btn-primary mt-2'>Kirim</button>
                </form>
            </Row>
        </div>
    )
}

export default ForumSatu