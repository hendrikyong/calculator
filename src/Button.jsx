import styles from "./css/button.module.css";
import PropTypes from "prop-types";
function Button(props) {
  return (
    <>
      <button className={styles.button}>{props.label}</button>
    </>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
