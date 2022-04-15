import './Breakfast.css'
import React from 'react'
// import { Card, CardGroup } from 'react-bootstrap';

const Breakfast = (props) => {
    const { breakfast } = props;
    const { name, image, price, about } = breakfast;
    return (
        <div className='col-lg-4 col-md-6 col-12'>

            <img className='img-fluid' src={image} alt="food" />
            <div className='text-align-center'>
                <h3>{name}</h3>
                <p>
                    {
                        about.length > 30 ? about.slice(0, 30) : about
                    }
                </p>
                <h2>Price : {price}</h2>
            </div>
        </div>
    )
}

export default Breakfast