import React from 'react'

export const IncorrectInput = ({error}) => {
  return (
    <div>
      <h1>{error ? error + "- doesnt't exists !" : ''}</h1>
    </div>
  )
}
