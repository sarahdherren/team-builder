import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Member from './components/Member';

const teamMembers = [{
  id: uuidv4(),
  firstName: 'Bob',
  lastName: 'Jones',
  email: 'bob@teamBuilders.com',
  position: 'Frontend Engineer',
  phone: '(555) 555-1212'
},
{
  id: uuidv4(),
  firstName: 'Sally',
  lastName: 'Smith',
  email: 'sally@teamBuilders.com',
  phone: '(555) 555-1212',
  position: 'UX designer',
  
}];

const initialFormValues = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: ''
};

function App() {

  const[teamList, setTeamList] = useState(teamMembers);
  const[formValues, setFormValues] = useState(initialFormValues);
  const[memberToEdit, setMemberToEdit] = useState();

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  };


  const submitForm = () => {
   
    const newMember = {
      id: formValues.id ? formValues.id : uuidv4(),
      email: formValues.email.trim(),
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      position: formValues.position,
      phone: formValues.phone.trim()
    }
    
    if(!newMember.email || !newMember.firstName || !newMember.lastName || !newMember.phone || !newMember.position) {
      return
    }

    if (memberToEdit) {
      //remove member being edited from teamList Array to avoid duplicate addition
    const editingTeamArray =  teamList.filter(member => formValues.id !== member.id)
    setTeamList([newMember, ...editingTeamArray])
    }
    else {
    setTeamList([newMember, ...teamList])
    }

    setFormValues(initialFormValues)
    setMemberToEdit()
  }

  const editHandler = (member) => {
    setMemberToEdit(member)
  }

  return (
    <div className="App">
      <Form update={updateForm} submit={submitForm} values={formValues} edit={memberToEdit} setFormValues={setFormValues} />
      {teamList.map(member => (
        <Member key={uuidv4()} member={member} editHandler={editHandler} />
      ))}
    </div>
  );
}

export default App;
