import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';


import { Card } from 'antd';
const Cards = ({ data }) => {

    const navigate = useNavigate();

    const { Meta } = Card;

    useEffect(() => {

    }, [data])


    return (
        <>

            <Card
                onClick={() => { navigate(`/detail/${data.id} `) }}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />}
            >
                <Meta title={data.name ? data.name : data.title} />
            </Card>


        </>
    )
}

export default Cards