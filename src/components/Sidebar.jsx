import Patient from './Patient'
import search from '../assets/search.svg'
import './Sidebar.css'


const Sidebar = (props) => {
  console.log(props);
    function patientData() {
        return props.data.map((patient) => {
          return (
            <div id = {props.selected === patient.name ? "highlight":""}>
              <Patient 
                key={patient.id}
                image={patient.profile_picture} 
                name={patient.name} 
                gender={patient.gender} 
                age={patient.age} 
                onSelect = {()=>props.onPatientSelect(patient.name)}  
              />
            </div>
          );
        });
      }
      
  return (
    <aside className="left-sidebar">
        <div className="sidebar-header">
            <h1>Patients</h1>
            <img src={search} alt='search-icon'/>
        </div>
        <div className='sidebar-container'>
          {props.data ? patientData() : null}
        </div>      
    </aside>
  )
}

export default Sidebar