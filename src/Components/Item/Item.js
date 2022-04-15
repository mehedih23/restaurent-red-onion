import './item.css'
import React from 'react'

const Item = (props) => {
    const { name, image, about, price } = props.item;
    return (
        <div className='container my-3 d-flex gap-3 align-items-center justify-content-between'>
            <div>
                <h3>{name}</h3>
                <p>{about}</p>
                <h2>{price}</h2>
                <button className='btn btn-outline-danger'>Add</button>
            </div>
            <div>
                <img className='img-fluid' src={image} alt="food" />
            </div>
        </div>
    )
}

export default Item