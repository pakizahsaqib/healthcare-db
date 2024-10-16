import React from 'react'
import './LabReport.css'
import download from '../assets/download.svg'

const LabReport = (props) => {
    function labReports() {
        return props.data.map((item) => {
          return (
            <div className="content">
                <p>{item}</p>
                <img src={download} alt='download-icon'/>
            </div>
          );
        });
      }
  return (
    <div className='lab-report'>
        <h1>Lab Reports</h1>
        <div className="lab-container">
            {props.data ? labReports() : null}
        </div>    
    </div>
  )
}

export default LabReport