import "./TextInput.css";

const TextInput = (props) => {
  const placeholderSufix = `${props.placeholder}...`

  const handleOnChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input
        required={props.required}
        onChange={handleOnChange}
        placeholder={placeholderSufix}/>
    </div>
  );
};

export default TextInput;
