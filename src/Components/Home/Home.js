import './Home.css'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='header-container'>
                <h1 className='mb-5'>Best food waiting for your belly</h1>
                <div className="input-group mb-3 w-50">
                    <input type="text" className="form-control" placeholder="Recipe's name" aria-label="Recipe's name" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-danger" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div>
                <div>
                    <Link to='breakfasts'>Breakfast</Link>
                    <Link to='lunch'>Lunch</Link>
                    <Link to='dinner'>Dinner</Link>
                </div>
                <Outlet></Outlet>
            </div>
            <div>
                <div className='text-center my-5'>
                    <button className="btn btn-outline-danger">Checkout Your Food</button>
                </div>
            </div>
        </div>
    )
}

export default Home