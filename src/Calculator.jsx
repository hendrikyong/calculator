import styles from "../src/css/calculator.module.css";
function Calculator() {
  return (
    <>
      <div className={styles.calcContainer}>
        <div className={styles.calcScreen}></div>
      </div>
    </>
  );
}

export default Calculator;
