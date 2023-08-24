/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import Countries from "./components/Countries";
import "./app.css"
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data)
      setError(null);
      setIsLoading(false);
     
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry =(name)=>{
    toast("Country is Removed Successfully")
    const filter = filteredCountries.filter((country)=>
      country.name.common !== name
      
    )
    setFilteredCountries(filter)
   
  }

const handleSearch =(searchValue)=>{
  let value = searchValue.toLowerCase();
  const newCountries = countries.filter((country)=>{
    const CountryName = country.name.common.toLowerCase();
    return CountryName.startsWith(value)
  })

  setFilteredCountries(newCountries);
}

  return (
    <>
     <h1>Country App</h1>
    <Search onSearch ={handleSearch}/>
      <ToastContainer />
   
    {isLoading && <h1>Loading....</h1>}
    {error && <h1>{error.message}</h1>}
    {countries && <Countries countries={filteredCountries}
    onRemoveCountry = {handleRemoveCountry}/>}
  
    </>
  );
}

export default App;
