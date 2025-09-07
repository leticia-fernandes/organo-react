import "./Form.css";
import TextInput from "../TextInput";
import List from "../List";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const teams = [
    'Back-end',
    'Front-end',
    'Mobile',
    'DevOps',
    'UX',
  ];
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.formData({
      name: name,
      role: role,
      image: image,
      team: team,
    });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Fill in the fields below to create the employee card:</h2>
        <TextInput
          required={true}
          value={name}
          onChange={value => setName(value)}
          label="Name"
          placeholder="Type the name"
        />
        <TextInput
          required={true}
          value={role}
          onChange={value => setRole(value)}
          label="Role"
          placeholder="Type the role"
        />
        <TextInput
          label="Image"
          value={image}
          onChange={value => setImage(value)}
          placeholder="Type the image address"
        />
        <List
          required={true}
          label={"Team"}
          items={teams}
          value={team}
          onChange={value => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
