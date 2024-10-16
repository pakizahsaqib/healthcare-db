import React from 'react';
import more from '../assets/more_horiz.svg';
import './Patient.css';

const Patient = (props) => {
  return (
    <div className='patient-card' onClick={props.onSelect}>
      <img className='patient-img' src={props.image} alt={props.name} />
      <div className='patient-info'>
        <h3>{props.name}</h3>
        <p>{props.gender}, {props.age}</p>
      </div>
      <img className='more' src={more} alt='more-icon' />
    </div>
  );
};

export default Patient;
