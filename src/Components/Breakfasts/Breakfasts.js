import './Breakfasts'
import Breakfast from '../Breakfast/Breakfast'
import useItems from '../../Hooks/useItems'
import { useState } from 'react';
import Item from '../Item/Item';


const Breakfasts = () => {
    const [breakfasts] = useItems();
    const [items, setItems] = useState([])

    const handleItem = (id) => {
        const bf = breakfasts.map(breakfast => breakfast)
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
                    breakfasts.map(breakfast => <Breakfast
                        key={breakfast.id}
                        breakfast={breakfast}
                        handleItem={handleItem}
                    ></Breakfast>)
                }
            </div>
        </div>
    )
}

export default Breakfasts