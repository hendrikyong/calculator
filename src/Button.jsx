import styles from "./css/button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <>
      <button
        className={`${styles.button} ${props.className || ""}`}
        onClick={() => props.onClick(props.label)}
      >
        {props.label}
      </button>
    </>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
