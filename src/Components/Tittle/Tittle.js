import React from 'react'
import './Tittle.css'

const Tittle = ({subtitle,title}) => {
  return (
    <div className='title'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Tittle
