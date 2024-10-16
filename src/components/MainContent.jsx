import React from 'react'
import DiagnosticHistory from './DiagnosticHistory'
import DiagnosticList from './DiagnosticList'

const MainContent = (props) => {
  return (
    <main className="main-content">
        <DiagnosticHistory data={props.data}/>
        <div className="bottom-content">
            <DiagnosticList data={props.list}/>
        </div> 
    </main>
    
  )
}

export default MainContent