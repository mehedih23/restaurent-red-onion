import './Lunches.css'
import React from 'react'
import useItems from '../../Hooks/useItems'
import Lunch from '../Lunch/Lunch'

const Lunches = () => {
    const [, lunches] = useItems();
    return (



        <div className='container'>
            <div className='row gy-4'>
                {
                    lunches.map(lunch => <Lunch
                        key={lunch.id}
                        lunch={lunch}
                    ></Lunch>)
                }
            </div>
        </div>

    )
}

export default Lunches