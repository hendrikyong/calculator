import Button from "./Button";
import styles from "../src/css/calculator.module.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState();
  const [calculated, setCalculated] = useState(false);

  function handleButtonClick(label) {
    setEquation((e) => e + label);
  }

  function handleArithmetic(label) {
    setEquation((e) => e + label);
  }

  function handleCalculate() {
    console.log("Calculate button clicked");
    try {
      // i want to say check if answer has a value if there is any operations after the equals have been hit must be calculated with that value and not the equation
      setAnswer(evaluate(equation));
    } catch (e) {
      setAnswer("Error");
    }
  }

  function handleClear() {
    setEquation("");
    setAnswer("");
  }
  return (
    <>
      <div className={styles.calcCover}>
        <div className={styles.calcContainer}>
          <div className={styles.calcScreen}>
            <div className={styles.eqn}>{equation}</div>
            <div className={styles.ans}>{answer}</div>
          </div>
          <div className={styles.calcButtons}>
            <Button label="AC" onClick={handleClear} />
            <Button label="√" onClick={handleArithmetic} />
            <Button label="%" onClick={handleArithmetic} />
            <Button label="/" onClick={handleArithmetic} />
            <Button label="7" onClick={handleButtonClick} />
            <Button label="8" onClick={handleButtonClick} />
            <Button label="9" onClick={handleButtonClick} />
            <Button label="*" onClick={handleArithmetic} />
            <Button label="4" onClick={handleButtonClick} />
            <Button label="5" onClick={handleButtonClick} />
            <Button label="6" onClick={handleButtonClick} />
            <Button label="-" onClick={handleArithmetic} />
            <Button label="1" onClick={handleButtonClick} />
            <Button label="2" onClick={handleButtonClick} />
            <Button label="3" onClick={handleButtonClick} />
            <Button label="+" onClick={handleArithmetic} />
            <Button
              label="0"
              onClick={handleButtonClick}
              className={styles.wideButton}
            />
            <Button label="." onClick={handleButtonClick} />
            <Button label="=" onClick={handleCalculate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
