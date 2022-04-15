import { useEffect, useState } from "react";

const useItems = () => {
    const [breakfasts, setBreakfasts] = useState([])
    useEffect(() => {
        fetch('breakfasts.json')
            .then(response => response.json())
            .then(data => setBreakfasts(data))
    }, [])

    const [lunches, setLunches] = useState([])
    useEffect(() => {
        fetch('lunch.json')
            .then(response => response.json())
            .then(data => setLunches(data))
    }, [])

    const [dinners, setDinners] = useState([])
    useEffect(() => {
        fetch('dinner.json')
            .then(response => response.json())
            .then(data => setDinners(data))
    }, [])

    return [breakfasts, lunches, dinners]

}
export default useItems;