import React from 'react';
import getPets from '../hooks';
import Petitem from '../components/Petitem';


const api= 'https://us-central1-mascota-cc5d1.cloudfunctions.net/api';

const Home = () => {
    const pets = getPets(api);
    return (
    <div className="Home">
        <div className="Home-container">
            <div className="Home-items">
                {
                    pets.map((pet, index)=>
                        <Petitem pet={pet} key={`Pet-${index}`} />                
                    )
                }
                
            </div>
        </div>
    </div>
    );
} 

export default Home;