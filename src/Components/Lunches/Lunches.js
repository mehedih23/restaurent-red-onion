import './Lunches.css'
import React, { useState } from 'react'
import useItems from '../../Hooks/useItems'
import Lunch from '../Lunch/Lunch'
import Item from '../Item/Item';


const Lunches = () => {
    const [, lunches] = useItems();
    const [items, setItems] = useState([])
    const handleItem = (id) => {
        const bf = lunches.map(lunch => lunch)
        const onlyOne = bf.filter(fast => fast.id === id)
        setItems(onlyOne)
    }


    return (
        <div div className='container' >
            {
                items.map(item => <Item
                    key={item.index}
                    item={item}
                ></Item>)

            }
            <div className='row gy-4'>
                {
                    lunches.map(lunch => <Lunch
                        key={lunch.id}
                        lunch={lunch}
                        handleItem={handleItem}
                    ></Lunch>)
                }
            </div>
        </div >

    )
}

export default Lunches