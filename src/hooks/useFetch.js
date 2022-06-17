import { useState, useCallback} from "react"


const useFetch = () => {
    const [items, setItems] = useState();

    const doFetch = useCallback(async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/stats', {
                        credentials: 'include',
                         headers: {
                             'Content-Type': 'application/json',
                            },
                         method: 'GET',

            })
            const data = await response.json();        
            setItems(data);

        }catch(e) {
            console.log('Error occurred ', e);
        }    
    })
    return { doFetch, result: items}         

}

export default useFetch;





















