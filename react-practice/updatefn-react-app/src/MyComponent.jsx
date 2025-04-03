import React, {useState} from 'react'

function MyComponent() {

    const [car, setCar] = useState({year: 2014, make:"Lamborghini", model:"Huracan"});

    function handleYearChange(event){
        setCar(c => ({...car, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}));
    }

  return (<div>
    <p className='car-text'>Your Favorite car is: {car.year} {car.make} {car.model} </p>
    <input className='car-year' type="number" value={car.year} onChange={handleYearChange}/><br/>
    <input className='car-make' type="text" value={car.make} onChange={handleMakeChange}/><br/>
    <input className='car-model' type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>);
}

export default MyComponent