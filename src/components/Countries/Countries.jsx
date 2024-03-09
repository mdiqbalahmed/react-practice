import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {

const[countries,setCountries] = useState([]);
const [visitedCountries,setVisitedCountries]=useState([])
const [visitedFlag,setVisitedFlag]= useState([]);


useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all ')
    .then(res =>res.json())
    .then(data => setCountries(data));
},[])


const handleVisitedCountry = country => {
    const newVisitedCountries = [ ...visitedCountries,country];
    setVisitedCountries(newVisitedCountries)
}

const handleVisitedFlag = country =>{
    const newVisitedFlag =[...visitedFlag,country]
    setVisitedFlag(newVisitedFlag);
}


    return (
        <div >
            <h3>Countries : {countries.length} </h3>
            <div>
                <h4> Visited countries : {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}
                            
                        </li>)
                    }
                </ul>
            </div>
            <div className="flag">
                {
                    visitedFlag.map((flag,idx) => <img  key={idx} src={flag}></img>)
                }
            </div>
           <div className="countries">
           {
                countries.map(country =><Country country={country} 
                handleVisitedCountry= {handleVisitedCountry}
                handleVisitedFlag= {handleVisitedFlag}
                key={country.cca3}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;