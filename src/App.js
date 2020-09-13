import React, { Component } from 'react';
import TextInput from './components/TextInput';
import Autocomplete from './components/Autocomplete';

import axios from "axios";

function App() {

  let arrayOptions = [
    'Papaya',
    'Persimmon',
    'Paw Paw',
    'Prickly Pear',
    'Peach',
    'Pomegranate',
    'Pineapple'
  ];

  const fetchCountries = async () => {
    try {
      const {
        data: { countries },
      } = await axios.get('https://covid19.mathdro.id/api/countries');
      console.log(countries.map((country) => country.name))
      return countries.map((country) => country.name);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div>
<Autocomplete options={arrayOptions}/>
    </div>
  );
}

export default App;
