import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/Card';
import { getCharacterByIdAsync, getComicsByIdAsync, selectComics, selectCurrentCharacter, selectLoading } from '../../features/marvel/marvelSlice';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import './index.scss'
import Loader from '../../components/Loader';
import Navigation from '../../components/Navigation';

const DetailPage = () => {

    const dispatch = useDispatch();
    const comics = useSelector(selectComics())
    const currentCharacter = useSelector(selectCurrentCharacter())
    const status = useSelector(selectLoading())

    let params = useParams()

    useEffect(() => {
        dispatch(getComicsByIdAsync(params.id));
        dispatch(getCharacterByIdAsync(params.id));
    }, [])

    return (
        <>
            <Navigation />
            {status == 'loading' ? <Loader /> : <div className='container'>
                <Row>
                    <Col sm={24} xl={12} className='character-img'>
                        {currentCharacter?.thumbnail && <img src={`${currentCharacter.thumbnail.path}.${currentCharacter.thumbnail.extension}`} />}
                    </Col>
                    <Col sm={24} xl={12} className='character-detail'>
                        <h3>
                            {currentCharacter?.name && currentCharacter.name}
                        </h3>
                        <p>
                            {currentCharacter?.description ? currentCharacter.description : 'This character is so mysterious!!'}
                        </p>
                    </Col>
                </Row>
                <Row>
                    {comics.map((comic, i) =>
                    (<Col xs={24} sm={24} md={12} lg={8} xl={8} key={i}>
                        <Cards data={comic} />
                    </Col>)
                    )}
                </Row>
            </div>}
        </>
    )
}

export default DetailPage