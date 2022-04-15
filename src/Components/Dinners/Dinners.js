import './Dinners.css'
import React from 'react'
import useItems from '../../Hooks/useItems'
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [, , dinners] = useItems();
    return (



        <div className='container'>
            <div className='row gy-4'>
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                    ></Dinner>)
                }
            </div>
        </div>

    )
}

export default Dinners