import "./TextInput.css";

const TextInput = (props) => {
  const placeholderSufix = `${props.placeholder}...`

  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input placeholder={placeholderSufix}/>
    </div>
  );
};

export default TextInput;
