import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

//import data artikel
import { postArtikel } from '../../data/article.js';

//import css
import './index.css';

const Artikel = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        let article = postArtikel.find((article) => article.id === parseInt(id));

        if (article) {
            setArticle(article);
        }
    }, [])


    return (
        <div className='postArtikel'>
            <Container>
                <Row>
                    <div className='kembali'>
                        <Link to="/artikel">
                            <span>&#8592;</span> Go Back
                        </Link>
                    </div>

                </Row>

                {
                    article ? (
                        <div>
                            <div className='mt-4 artikel align-items'>
                                <h2 className='fs-bold text-center mb-4'>{article.title}</h2>
                                <img src={article.image} alt="img-artikel" className='text-center mb-4 img-fluid align-items-center' />
                                <p>{article.deskripsi}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Eror</p>
                    )
                }


            </Container>

        </div>
    )
}

export default Artikel