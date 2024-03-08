import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    const {name, flags,population,area,cca3} = country
    const [visited, setvisited]= useState(false)
    const handleVisited = () =>{
        setvisited(!visited)
    }
    
    return (
        <div className={`country ${visited? 'visited':'non-visited'} `}>
            <h3 style={{color:visited?'purple':'white'}}>Name : {name?.common }</h3>
            <img src={flags.png}/>
            <p>Population : {population}</p>
            <p>area : {area} </p>
            <p><small>code : {cca3}</small></p>
            <button onClick={handleVisited}>{visited? 'visited':'going'}</button>
            {visited ? 'I have visited' :'i want to visit'}

        </div>
    );
};

export default Country;