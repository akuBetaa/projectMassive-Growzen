import React from 'react'
import { Row, Col } from 'react-bootstrap'

import ImgUser from '../../assets/img/user/beta.png'
import ImgUser2 from "../../assets/img/article/article-1.jpg"
import IconComment from '../../assets/icons/icon-comment.svg'
import IconLike from '../../assets/icons/icon-like.svg'

const ForumEmpat = () => {
    return (
        <div className='mypartisipasi'>
            <Row className='partisipasi mt-4'>
                <Col>
                    <div className='d-flex user'>
                        <img src={ImgUser2} alt="" />
                        <div className='ms-2 mt-1'>
                            <h5>Nana Al</h5>
                            <p>1 hari lalu</p>
                        </div>
                    </div>

                    <div className='postingan'>
                        <p>
                            Numpang tanya, ada gak disini yg kalo minum oat efeknya gatal2 sampe bentol2, terus bibir bengkak?
                            Itu gak apa2 atau gimana ya?
                        </p>

                        <div className='d-flex barlikecomment'>
                            <div className='d-flex '>
                                <img src={IconLike} alt="" />
                                <p className='ms-2 mt-3'>10 Likes</p>
                            </div>
                            <div className='d-flex ms-5'>
                                <img src={IconComment} alt="" />
                                <p className='ms-2 mt-3'>1 Comments</p>
                            </div>
                        </div>
                    </div>
                </Col >
            </Row>

            <Row className='partisipasi mt-4'>
                <Col>
                    <div className='d-flex user'>
                        <img src={ImgUser2} alt="" />
                        <div className='ms-2 mt-1'>
                            <h5>Nana Al</h5>
                            <p>1 hari lalu</p>
                        </div>
                    </div>

                    <div className='postingan'>
                        <p>
                            Numpang tanya, ada gak disini yg kalo minum oat efeknya gatal2 sampe bentol2, terus bibir bengkak?
                            Itu gak apa2 atau gimana ya?
                        </p>

                        <div className='d-flex barlikecomment'>
                            <div className='d-flex '>
                                <img src={IconLike} alt="" />
                                <p className='ms-2 mt-3'>10 Likes</p>
                            </div>
                            <div className='d-flex ms-5'>
                                <img src={IconComment} alt="" />
                                <p className='ms-2 mt-3'>1 Comments</p>
                            </div>
                        </div>
                    </div>
                </Col >
            </Row>

            <Row className='partisipasi mt-4'>
                <Col>
                    <div className='d-flex user'>
                        <img src={ImgUser2} alt="" />
                        <div className='ms-2 mt-1'>
                            <h5>Nana Al</h5>
                            <p>1 hari lalu</p>
                        </div>
                    </div>

                    <div className='postingan'>
                        <p>
                            Numpang tanya, ada gak disini yg kalo minum oat efeknya gatal2 sampe bentol2, terus bibir bengkak?
                            Itu gak apa2 atau gimana ya?
                        </p>

                        <div className='d-flex barlikecomment'>
                            <div className='d-flex '>
                                <img src={IconLike} alt="" />
                                <p className='ms-2 mt-3'>10 Likes</p>
                            </div>
                            <div className='d-flex ms-5'>
                                <img src={IconComment} alt="" />
                                <p className='ms-2 mt-3'>1 Comments</p>
                            </div>
                        </div>
                    </div>
                </Col >
            </Row>
        </div>
    )
}

export default ForumEmpat