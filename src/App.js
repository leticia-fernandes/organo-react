import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const [employees, setEmployees] = useState([]);
  const teams = [
    {
      name:'Back-end',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name:'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name:'Mobile',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name:'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name:'UX',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
  ];
  const addFormData = (formData) => {
    setEmployees([...employees, formData]);
  };

  return (
    <div>
      <Banner />
      <Form teams={teams.map(team => team.name)} formData={addFormData} />
      {teams.map(
        team => <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      )};

    </div>
  );
}

export default App;
