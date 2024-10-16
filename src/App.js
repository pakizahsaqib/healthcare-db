import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PatientProfile from './components/PatientProfile';
import MainContent from './components/MainContent';
import './App.css';
import LabReport from './components/LabReport';

function App() {

  const [data, setData] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [patientName, setPatientName] = useState("Jessica Taylor");
  const handlePatientName = (name)=>{
    setPatientName(name);
  }

  useEffect(() => {
    let username = process.env.REACT_APP_API_USERNAME;
    let password = process.env.REACT_APP_API_PASSWORD;
    let auth = btoa(`${username}:${password}`);


    fetch('https://fedskillstest.coalitiontechnologies.workers.dev/auth', {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Filter for the specific patient by name
        setData(data);
        setPatientData(data.find(patient => patient.name === patientName));
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [patientName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid-container">
      <Header className="header"/>
      <Sidebar className="sidebar" data={data} selected={patientName} onPatientSelect={handlePatientName} />
      <MainContent className="main-content" data={patientData.diagnosis_history} list={patientData.diagnostic_list}/>
      <PatientProfile className="right-sidebar" data={patientData} /> 
      <LabReport className="bottom-right-sidebar" data={patientData.lab_results}/>
    </div>
  );
};

export default App;
