import './Breakfasts.css'
import React, { useEffect, useState } from 'react'
import Breakfast from '../Breakfast/Breakfast'

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([])
    useEffect(() => {
        fetch('breakfast.json')
            .then(response => response.json())
            .then(data => setBreakfasts(data));
    }, [])
    return (
        <div className='container '>
            <div className='row gx-5 gy-0'>
                {
                    breakfasts.map(breakfast => <Breakfast
                        key={breakfast.id}
                        breakfast={breakfast}
                    ></Breakfast>)
                }
            </div>
        </div>
    )
}
export default Breakfasts