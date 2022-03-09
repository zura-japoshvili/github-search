import React, { useState } from 'react'

export const ShowAccount = ({data}) => {
  function createContent(){
  let Content = ''
    if(data.length !== 0){
      Content = `
        <div class='about-cont'>
          <img src='${data.avatar_url}'>
          <div>
            <h5>Account Login: ${data.login}</h5>
            <h4>Name: ${data.name}</h4>
            <p>Public repositories: ${data.public_repos}</p>
          </div>
        </div>
      `;
    }
    else{
      Content = '';
    }
    return {__html: Content};
  }

  return (
    <div className='acc-cont' dangerouslySetInnerHTML={createContent()}></div>
  )
}
