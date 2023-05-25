// src/App.js
import './App.css';
// import countries from './countries.json';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {

  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(res => {
        console.log('#########', res.data)
        setCountriesList(res.data)

      })
      .catch(err => {
        // Handle the error which will hopefully never happen
      });
  }, []);
  // setCountriesList(countries)
   
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesList} />
          {/* React-Router Route rendering the CountryDetails should go here */}
        </div>
      </div>
      <Routes>
        <Route path="/details/:alpha3Code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
export default App;
