import React , {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { Search } from './components/Search';
import { ShowAccount } from './components/ShowAccount';
import { IncorrectInput } from './components/IncorrectInput';


function App() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState('');




  return (
    <>
      <Search setData={setData}/>
      <ShowAccount data={data}/>
      <IncorrectInput error={errors}/>
    </>
  );
}

export default App;
