import React, { Component } from 'react';
import TextInput from './components/TextInput';
import Autocomplete from './components/Autocomplete';


function App() {
  return (
    <div>
    <TextInput />
<Autocomplete options={[
  'Papaya',
  'Persimmon',
  'Paw Paw',
  'Prickly Pear',
  'Peach',
  'Pomegranate',
  'Pineapple'
]}/>
    </div>
  );
}

export default App;
