import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import { useDispatch } from 'react-redux';
import { getContactsList } from 'redux/form/formOperations';
import { useEffect } from 'react';



const App = () => {

  const dispatch = useDispatch()

  useEffect (()=>{
    dispatch(getContactsList())
  },[])

  

  return (
    <Section>
      <h1 className="add-contact-box__heading">Phonebook</h1>
      <Form />
      <h2 className="display-cotnact-box__heading">Contacts</h2>
      <Filter />
      <List />
    </Section>
  );
};


export default App;