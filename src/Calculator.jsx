import Button from "./Button";
import styles from "../src/css/calculator.module.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState();
  const [calculated, setCalculated] = useState(false);

  function handleButtonClick(label) {
    if (calculated) {
      setEquation(label);
      setCalculated(false);
    } else {
      setEquation((e) => e + label);
    }
  }

  function handleArithmetic(label) {
    if (calculated) {
      //If a calculation was just made, start a new equation with the answer and the operator
      setEquation(answer + label);
      setCalculated(false);
    } else {
      setEquation((e) => e + label);
    }
  }

  function handleCalculate() {
    try {
      let modifiedEquation = equation;

      // Handle square root
      if (equation.includes("√")) {
        // Replace √x with sqrt(x)
        modifiedEquation = modifiedEquation.replace(
          /√(\d+(\.\d+)?)/g,
          (_, num) => {
            return `sqrt(${num})`;
          }
        );
      }

      const result = evaluate(modifiedEquation);

      // Check for division by zero
      if (result === Infinity || result === -Infinity) {
        setAnswer("Math Error");
      } else {
        const finalAns = Math.round(result * 100000) / 100000;
        setAnswer(finalAns);
      }

      setCalculated(true);
    } catch (e) {
      setAnswer("Error");
    }
  }

  function handleClear() {
    setEquation("");
    setAnswer("");
    setCalculated(false);
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
