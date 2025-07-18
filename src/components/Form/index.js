import "./Form.css";
import TextInput from "../TextInput";

const Form = () => {

  return (
    <section className="form">
      <form>
        <h2>Fill in the fields below to create the employee card:</h2>
        <TextInput label="Name" placeholder="Type the name"/>
        <TextInput label="Role" placeholder="Type the role"/>
        <TextInput label="Image" placeholder="Type the image address"/>
      </form>
    </section>
  );
};

export default Form;
