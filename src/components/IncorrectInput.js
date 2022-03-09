import React from 'react'

export const IncorrectInput = ({error}) => {
  return (
    <div className='error-cont'>
      <h1>{error ? error + "- doesnt't exists !" : ''}</h1>
    </div>
  )
}
