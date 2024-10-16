import React from 'react'
import './DiagnosticHistory.css'
import resp from '../assets/respiratory-rate.svg'
import temperature from '../assets/temperature.svg'
import heart from '../assets/HeartBPM.svg'
import BPChart from './BPChart'


const DiagnosticHistory = (props) => {
   
    let item = props.data[0]
    function dia() {
        return(
        <div className='dia-1'>
              <img src={resp} alt='resperatory rate icon'/>
              <p className='dia-title'>Respiratory Rate</p>
              <p className='dia-value'>{item.respiratory_rate.value} bpm</p>
              <p className='dia-tidbit'>{item.respiratory_rate.levels}</p>
        </div>
        )
      }
      function dia2() {
        return(
        <div className='dia-2'>
              <img src={temperature} alt='temperature-icon'/>
              <p className='dia-title'>Temperature</p>
              <p className='dia-value'>{item.temperature.value}°F</p>
              <p className='dia-tidbit'>{item.temperature.levels}</p>
        </div>
        )
      }
      function dia3() {
        return(
        <div className='dia-3'>
              <img src={heart} alt='heart icon'/>
              <p className='dia-title'>Heart Rate</p>
              <p className='dia-value'>{item.heart_rate.value} bpm</p>
              <p className='dia-tidbit'> {item.heart_rate.levels === "Normal" ? <></> : item.heart_rate.levels === "Higher than Average" ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>} {item.heart_rate.levels}</p>
            </div>
        )
      }
  return (
    <div className='dia-history'>
        <h1>Diagnosis History</h1>
        <div className='dia-graph'>
            <div className="dia-container">
                <div className='bp-plot'>
                    <div className="bp-header">
                        <h2>Blood Pressure</h2>
                        <p>Last 6 Months  <i class="fa-solid fa-caret-down"></i></p>
                    </div>
                    <BPChart className="bp-chart" bpData={props.data}/>
                </div>
                <div className='bp-data'>
                    <div className="bp-systolic">
                        <p className='dia-name'>Systolic</p>
                        <p className='dia-value'>{item.blood_pressure.systolic.value}</p>
                        <p className='dia-tidbit'> {item.blood_pressure.systolic.levels === "Normal" ? <></> : item.blood_pressure.systolic.levels === "Higher than Average" ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>} {item.blood_pressure.systolic.levels}</p>
                    </div>
                    <div className="bp-diastolic">
                        <p className='dia-name'>Diastolic</p>
                        <p className='dia-value'>{item.blood_pressure.diastolic.value}</p>
                        <p className='dia-tidbit'> {item.blood_pressure.diastolic.levels === "Normal" ? <></> : item.blood_pressure.diastolic.levels === "Higher than Average" ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>} {item.blood_pressure.diastolic.levels}</p>
                    </div>
                </div>
             </div>
        </div>
        <div className='diagnostics'>
                {dia()}
                {dia2()} 
                {dia3()}
        </div>
    </div>
  )
}

export default DiagnosticHistory