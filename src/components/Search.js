import React, { useState } from 'react';

export const Search = ({setApi}) => {
  const [user, setUser] = useState('');


  const Submit = e => {    
    e.preventDefault();
    const api = `https://api.github.com/users/${user}`;

    setApi(api);
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
