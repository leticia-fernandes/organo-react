import "./List.css";

const List = (props) => {

  const handleOnChange = (event) => {
    props.onChange(event.target.value)
  };

  return(
    <div className="list">
      <label>{props.label}</label>
      <select
        required={props.required}
        onChange={handleOnChange}
        value={props.value}
      >
        <option
        value={''} disabled>Select your team...</option>
        {props.items.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  );
};

export default List;
