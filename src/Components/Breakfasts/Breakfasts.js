import './Breakfasts'
import Breakfast from '../Breakfast/Breakfast'
import useItems from '../../Hooks/useItems'


const Breakfasts = () => {
    const [breakfasts] = useItems();
    return (
        <div className='container'>
            <div className='row gy-4'>
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