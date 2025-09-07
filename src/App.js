import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  const [employees, setEmployees] = useState([]);

  const addFormData = (formData) => {
    setEmployees([...employees, formData]);
  };

  return (
    <div>
      <Banner/>
      <Form formData={addFormData}/>
    </div>
  );
}

export default App;
