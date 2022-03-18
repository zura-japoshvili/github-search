import axios from 'axios'
import React, { useState } from 'react'

export const ShowAccount = ({data}) => {
  const [showMoreRepos,setShowMoreRepos] = useState([]);


  const showRepos = (data) => {
    axios.get(data)
    .then(res => {
      setShowMoreRepos(res.data)
    })
    .catch(err => {

    });
  }


  const createContent = () => {
    if(data.length !== 0){
      return (
        <div className='about-cont'>
          <img src={data.avatar_url} />
          <div>
            <h5>Account Login: {data.login}</h5>
            <h4>Name: {data.name}</h4>
            <p>Public repositories: {data.public_repos} <span >Show Repos</span></p>
            <p>Location: {data.location}</p>
          </div>
        </div>
      );
    }
    else{
      return (
        <></>
      );
    }
  }

  
  return (
    <div className='acc-cont'>
      {createContent()}
    </div>
  )
}
