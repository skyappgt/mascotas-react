import { useState, useEffect } from 'react';

const getPets=(url)=>{
    const [pets, setPets ] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(response =>response.json())
        .then(data=> setPets(data));
    }, []);

    return pets;

}

export default getPets;