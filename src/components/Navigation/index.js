import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate = useNavigate();

    return (
        <div className='navigation'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' alt="logo" onClick={() => { navigate("/") }} />
        </div>
    )
}

export default Navigation