import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './forum.css'

import Comments from '../comments/Comments'

import ImgUser from '../../assets/img/user/beta.png'
import ImgUser2 from "../../assets/img/article/article-1.jpg"
import IconComment from '../../assets/icons/icon-comment.svg'
import IconLike from '../../assets/icons/icon-like.svg'

const ForumDua = () => {
    return (
        <div className='feeduser'>

            <Row>
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

            <Row>
                <Col>
                    <div className='d-flex user mt-4'>
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

                        <div>
                            <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1" />
                        </div>
                    </div>
                </Col >
            </Row>
        </div>
    )
}

export default ForumDua