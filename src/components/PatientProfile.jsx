import React from 'react';
import './PatientProfile.css';
import birthIcon from '../assets/BirthIcon.svg';
import femaleIcon from '../assets/FemaleIcon.svg';
import maleIcon from '../assets/MaleIcon.svg';
import phoneIcon from '../assets/PhoneIcon.svg';
import insuranceIcon from '../assets/InsuranceIcon.svg';

const PatientProfile = (props) => {
  return (
    <aside className="right-sidebar">
      <img className='patientPic' src={props.data.profile_picture} alt="Patient" />
      <h1>{props.data.name}</h1>
      <div className='data'>
        <img src={birthIcon} alt="Birth Icon" />
        <div>
          <p>Date of Birth</p>
          <p id="bold">{props.data.date_of_birth}</p>
        </div>
      </div>
      <div className='data'>
        <img 
          src={props.data.gender === "Female" ? femaleIcon : maleIcon} 
          alt={props.data.gender === "Female" ? "Female Icon" : "Male Icon"} 
        />
        <div>
          <p>Gender</p>
          <p id="bold">{props.data.gender}</p>
        </div>
      </div>
      <div className='data'>
        <img src={phoneIcon} alt="Phone Icon" />
        <div>
          <p>Contact Info</p>
          <p id="bold">{props.data.phone_number}</p>
        </div>
      </div>
      <div className='data'>
        <img src={phoneIcon} alt="Phone Icon" />
        <div>
          <p>Emergency Contacts</p>
          <p id="bold">{props.data.emergency_contact}</p>
        </div>
      </div>
      <div className='data'>
        <img src={insuranceIcon} alt="Insurance Icon" />
        <div>
          <p>Insurance Provider</p>
          <p id="bold">{props.data.insurance_type}</p>
        </div>
      </div>
      <button className='btn'>Show All Information</button>
    </aside>
  );
}

export default PatientProfile;
