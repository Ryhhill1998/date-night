import "./input.styles.scss";

const Input = ({ label, inputOptions }) => {
  return (
    <div className="row">
      <label>{label}</label>
      <input {...inputOptions}></input>
    </div>
  );
};

export default Input;
