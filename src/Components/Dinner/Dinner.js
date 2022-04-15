import './Dinner.css'
import React from 'react'

const Dinner = (props) => {
    const { id, image, name, price, about } = props.dinner;
    const { handleItem } = props;


    return (
        <div onClick={() => handleItem(id)} className='item-style col-lg-4 col-md-6 col-12'>
            <img className='img-fluid' src={image} alt="food" />
            <div className='text-center mt-2' >
                <h4>{name}</h4>
                <h3>{price}</h3>
                <p>{about.length > 30 ? about.slice(0, 30) : about}</p>
            </div>

        </div>
    )
}

export default Dinner