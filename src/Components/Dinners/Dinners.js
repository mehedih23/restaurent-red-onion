import './Dinners.css'
import React from 'react'
import useItems from '../../Hooks/useItems'
import Dinner from '../Dinner/Dinner';
import { useState } from 'react';
import Item from '../Item/Item';

const Dinners = () => {
    const [, , dinners] = useItems();
    const [items, setItems] = useState([])
    const handleItem = (id) => {
        const bf = dinners.map(dinner => dinner)
        const onlyOne = bf.filter(fast => fast.id === id)
        setItems(onlyOne)
    }

    return (
        <div className='container'>
            {
                items.map(item => <Item
                    key={item.index}
                    item={item}
                ></Item>)

            }
            <div className='row gy-4'>
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                        handleItem={handleItem}
                    ></Dinner>)
                }
            </div>
        </div>

    )
}

export default Dinners