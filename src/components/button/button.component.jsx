import "./button.styles.scss";

const Button = ({ children, buttonOptions }) => {
  return <button {...buttonOptions}>{children}</button>;
};

export default Button;
