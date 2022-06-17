import { useEffect, useState } from "react";
import useFetch from '../../hooks/useFetch';
import './index.css';

import ContentItem from "../ContentItem";


const Stat = () => {
    const [active, setActive] = useState(0)
    const handleCLick = (event) => {
        setActive(event.target.id)
    }
    const {doFetch, result: items} = useFetch()
    
    useEffect(() => {
        doFetch();
    }, []);

    if(!items) {
        return <div>Waiting...</div>
    } 
    return (
        <div className = "App">
            <div className = "Tabs">
                <ul className="nav">
                    {items.map((item, index) => {return <li key = {index} id = {index} className = {active === index ? "active" : ""} onClick={handleCLick}>{`Item ${index + 1 }`}</li>})}
                    {/*Napraviti funkciju za aktive, ako je aktive === id className = active */}
                </ul>
                <div className = "outlet">
                {console.log(items[active])}
                {active <= items.length - 1 ? <ContentItem props = {items[active]}/>  : null}{/*Napraviti komponentu koja sadrzi kontent Tabova */}
            </div>
            </div>   
        </div>
    )
    
}

export default Stat;














