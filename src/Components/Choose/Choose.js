import './Choose.css'
import React from 'react'

const Choose = (props) => {
    const { name, image, icon, about } = props.item;

    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <img className='img-fluid mb-3' src={image} alt="choose us reason" />
            <div className='d-flex'>
                <div className='mx-2'>
                    <img src={icon} alt="choose us icon" />
                </div>
                <div className='mx-2'>
                    <h3>{name}</h3>
                    <p>{about}</p>
                </div>
            </div>
        </div>
    )
}

export default Choose