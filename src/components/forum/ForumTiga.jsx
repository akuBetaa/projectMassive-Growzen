import React from 'react'
import ForumSatu from './ForumSatu'
import { Row, Col } from 'react-bootstrap'

import ImgUser from '../../assets/img/user/beta.png'
import IconComment from '../../assets/icons/icon-comment.svg'
import IconLike from '../../assets/icons/icon-like.svg'


export const ForumTiga = () => {
    return (
        <div className='myquestion'>
            <Row>
                <div>
                    <ForumSatu />
                </div>
            </Row>

            <Row className='feedquestion mt-4'>
                <Col>
                    <div className='d-flex user'>
                        <img src={ImgUser} alt="" />
                        <div className='ms-2 mt-1'>
                            <h5>Beta Nurul Awwalin</h5>
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

            <Row className='feedquestion mt-4'>
                <Col>
                    <div className='d-flex user'>
                        <img src={ImgUser} alt="" />
                        <div className='ms-2 mt-1'>
                            <h5>Beta Nurul Awwalin</h5>
                            <p>2 hari lalu</p>
                        </div>
                    </div>

                    <div className='postingan'>
                        <p>
                            Min mau tanya susu kambing yg bgus apa ya..buat tb paru..
                            Kbtln buat gemuk juga bgsnya susu apaya..mhon bntuannya...
                            Merk skygoat atau etawa platinum
                        </p>

                        <div className='d-flex barlikecomment'>
                            <div className='d-flex '>
                                <img src={IconLike} alt="" />
                                <p className='ms-2 mt-3'>2 Likes</p>
                            </div>
                            <div className='d-flex ms-5'>
                                <img src={IconComment} alt="" />
                                <p className='ms-2 mt-3'>2 Comments</p>
                            </div>
                        </div>
                    </div>
                </Col >
            </Row>

            <Row className='feedquestion mt-4'>
                <Col>
                    <div className='d-flex user'>
                        <img src={ImgUser} alt="" />
                        <div className='ms-2 mt-1'>
                            <h5>Beta Nurul Awwalin</h5>
                            <p>2 hari lalu</p>
                        </div>
                    </div>

                    <div className='postingan'>
                        <p>
                            Jalan 4 bulan bb masih 38 masih sering sakit dada kapan naik bb nya ya?
                        </p>

                        <div className='d-flex barlikecomment'>
                            <div className='d-flex '>
                                <img src={IconLike} alt="" />
                                <p className='ms-2 mt-3'>2 Likes</p>
                            </div>
                            <div className='d-flex ms-5'>
                                <img src={IconComment} alt="" />
                                <p className='ms-2 mt-3'>2 Comments</p>
                            </div>
                        </div>
                    </div>
                </Col >
            </Row>
        </div>
    )
}
