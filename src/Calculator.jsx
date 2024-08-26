import Button from "./Button";
import styles from "../src/css/calculator.module.css";
function Calculator() {
  const handleButtonClick = (label) => {
    console.log(`Button clicked: ${label}`);
  };
  return (
    <>
      <div className={styles.calcCover}>
        <div className={styles.calcContainer}>
          <div className={styles.calcScreen}></div>
          <div className={styles.calcButtons}>
            <Button label="AC" onClick={handleButtonClick} />
            <Button label="√" onClick={handleButtonClick} />
            <Button label="%" onClick={handleButtonClick} />
            <Button label="/" onClick={handleButtonClick} />
            <Button label="7" onClick={handleButtonClick} />
            <Button label="8" onClick={handleButtonClick} />
            <Button label="9" onClick={handleButtonClick} />
            <Button label="*" onClick={handleButtonClick} />
            <Button label="4" onClick={handleButtonClick} />
            <Button label="5" onClick={handleButtonClick} />
            <Button label="6" onClick={handleButtonClick} />
            <Button label="-" onClick={handleButtonClick} />
            <Button label="1" onClick={handleButtonClick} />
            <Button label="2" onClick={handleButtonClick} />
            <Button label="3" onClick={handleButtonClick} />
            <Button label="+" onClick={handleButtonClick} />
            <Button
              label="0"
              onClick={handleButtonClick}
              className={styles.wideButton}
            />
            <Button label="." onClick={handleButtonClick} />
            <Button label="=" onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
