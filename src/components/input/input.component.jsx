import "./input.styles.scss";
import { Fragment } from "react";

const Input = ({ label, inputOptions }) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input {...inputOptions}></input>
    </Fragment>
  );
};

export default Input;
