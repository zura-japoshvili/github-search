import React , {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { Search } from './components/Search';
import { ShowAccount } from './components/ShowAccount';
import { IncorrectInput } from './components/IncorrectInput';


function App() {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    axios.get(user)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setErrors(user);
    })
  })


  return (
    <>
      <Search setApi={setUser}/>
      <ShowAccount data={data}/>
      <IncorrectInput error={errors}/>
    </>
  );
}

export default App;
