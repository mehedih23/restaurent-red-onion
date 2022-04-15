import './ChooseAll.css'
import React, { useEffect, useState } from 'react'
import Choose from '../Choose/Choose'

const ChooseAll = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('ChooseUs.json')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    console.log(items);
    return (
        <div className='container'>
            <div className='row gx-5 gy-0'>
                {
                    items.map(item => <Choose
                        key={item.id}
                        item={item}
                    ></Choose>)
                }
            </div>
        </div>
    )
}

export default ChooseAll