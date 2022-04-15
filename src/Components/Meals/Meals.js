import './Meals.css'
import React from 'react'
// import Breakfasts from '../Breakfasts/Breakfasts'
import { useNavigate } from 'react-router-dom'


const Meals = () => {
    const navigate = useNavigate()

    const handleBreakfast = () => {
        navigate('/breakfasts')
    }

    return (
        <div className='my-3'>
            <div className='text-center'>
                <h3 onClick={handleBreakfast} className='btn fw-bold'>Breakfast</h3>
                <h3 className='btn fw-bold'>Lunch</h3>
                <h3 className='btn fw-bold'>Dinner</h3>
            </div>
        </div>
    )
}

export default Meals