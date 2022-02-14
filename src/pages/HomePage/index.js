import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/Card';
import { getCharacterAsync, selectCharacter, selectLoading } from '../../features/marvel/marvelSlice';
import { Row, Col } from 'antd';
import './index.scss';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../../components/Loader';
import Navigation from '../../components/Navigation';

export default function HomePage() {

    const dispatch = useDispatch();
    const status = useSelector(selectLoading())
    const characters = useSelector(selectCharacter())

    useEffect(() => {
        if (characters.length == 0) {
            dispatch(getCharacterAsync(0));
        }
    }, [])


    const fetchMoreData = () => {
        setTimeout(() => {
            dispatch(getCharacterAsync(characters.length));
        }, 200)
    }

    return (
        <>
            <Navigation />
            {status == 'loading' && characters.length == 0 ? <Loader /> : <div className='container'>
                <InfiniteScroll
                    dataLength={characters.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                ><Row>
                        {characters.map((character, i) =>
                        (<Col xs={24} sm={24} md={12} lg={8} xl={8} key={i}>

                            <Cards data={character} />

                        </Col>)
                        )}
                    </Row>
                </InfiniteScroll>

            </div >}
        </>

    );
}
