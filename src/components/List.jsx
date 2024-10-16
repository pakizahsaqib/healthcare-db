import React from 'react'
import './List.css'

const List = (props) => {
  return (
        <div className='list'>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.status}</p>
        </div>

  )
}

export default List