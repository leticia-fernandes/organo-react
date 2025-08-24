import "./List.css";

const List = (props) => {
  return(
    <div className="list">
      <label>{props.label}</label>
      <select defaultValue={"default"}>
        <option value="default" disabled>Select your team...</option>
        {props.items.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  );
};

export default List;
