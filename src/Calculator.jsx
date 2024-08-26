import Button from "./Button";
import styles from "../src/css/calculator.module.css";
function Calculator() {
  return (
    <>
      <div className={styles.calcCover}>
        <div className={styles.calcContainer}>
          <div className={styles.calcScreen}></div>
          <div className={styles.calcButtons}>
            <Button label="AC" />
            <Button label="√" />
            <Button label="%" />
            <Button label="/" />
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="*" />
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" />
            <Button label="0" className={styles.wideButton} />
            <Button label="." />
            <Button label="=" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
