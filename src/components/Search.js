import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const Search = ({setData}) => {
  const [user, setUser] = useState('');


  const Submit = e => {    
    e.preventDefault();
    const api = `https://api.github.com/users/${user}`;


    axios.get(api)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      // setErrors(user);
    })
  }


  return (
    <div className='search-cont'>
        <form onSubmit={Submit}>
          <input className='search-field' onChange={(e) => setUser(e.target.value)} placeholder='Search github user'/>
          <button >Search</button>
        </form>
    </div>
  )
}
