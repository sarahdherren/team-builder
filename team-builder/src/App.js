import { useState } from 'react';
import './App.css';
import Form from './components/Form';

const teamMembers = [{
  firstName: 'Bob',
  lastName: 'Jones',
  email: 'bob@teamBuilders.com',
  position: 'Frontend Engineer',
  phone: '(555) 555-1212'
},
{
  firstName: 'Sally',
  lastName: 'Smith',
  email: 'sally@teamBuilders.com',
  phone: '(555) 555-1212',
  position: 'UX designer',
  
}];

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: ''
};

function App() {

  const[teamList, setTeamList] = useState(teamMembers);
  const[formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  };


  const submitForm = () => {
    const newMember = {
      email: formValues.email.trim(),
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      position: formValues.position,
      phone: formValues.phone.trim()
    }
    
    if(!newMember.email || !newMember.firstName || !newMember.lastName || !newMember.phone || !newMember.position) {
      return
    }
    
    setTeamList([newMember, ...teamList])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <Form update={updateForm} submit={submitForm} values={formValues} />
      {teamList.map(member => (
        <div className='TeamCard'>
          <div >
          <h2>{member.firstName} {member.lastName}</h2> 
          <p>{member.position}</p>
        </div>
        <div>
            <p>{member.phone}</p>
            <p>{member.email}</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default App;
