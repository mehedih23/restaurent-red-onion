import './Header.css'
import React from 'react'

const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='mb-5'>Best food waiting for your belly</h1>
            <div className="input-group w-50 mb-3">
                <input type="text" className="form-control" placeholder="Recipe's name" aria-label="Recipe's name" aria-describedby="basic-addon2" />
                <button className='btn btn-danger' id="basic-addon2">Search</button>
            </div>
        </div>
    )
}

export default Header;