import React from 'react'
import './DiagnosticList.css'
import List from './List'

const DiagnosticList = (props) => {
  function dialist() {
    return props.data.map((item,index) => {
      return (
        <List 
          key = {index}
          name = {item.name} 
          description = {item.description}
          status = {item.status}
        />
      );
    });
  }
  return (
    <div className='dia-list'>
        <h1>Diagnostic List</h1>
        <div className='container'>
            <h3>Problem/Diagnosis</h3>
            <h3>Description</h3>
            <h3>Status</h3>
        </div>
        <div className='container-items'>
            {props.data ? dialist(): null}
        </div>
    </div>
  )
}

export default DiagnosticList