import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Search = () => {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const Submit = e => {    
    e.preventDefault();
    const api = `https://api.github.com/users/${user}`

    axios.get(api)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err)
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
