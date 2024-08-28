# Calculator App

This is a simple React-based calculator application that performs basic arithmetic operations and handles square roots. It uses the `mathjs` library to evaluate mathematical expressions and manages the state for user interactions.

## Features

- **Basic Arithmetic Operations**: Addition, Subtraction, Multiplication, and Division.
- **Square Root Calculation**: Supports calculating the square root of a number.
- **Error Handling**: Displays "Math Error" for division by zero and "Error" for invalid expressions.
- **Chained Calculations**: Allows continuous calculations by using the result from previous operations.

## Dependencies

- React
- mathjs

## Installation

1. **Clone the repository:**

    ```bash
    https://github.com/hendrikyong/calculator.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd calculator
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

## Usage

- **Button Clicks**: Click on the buttons to build the equation.
- **Calculate**: Click the `=` button to evaluate the expression.
- **Clear**: Click `AC` to reset the calculator.

## Component Overview

### `Calculator.js`

The main component that renders the calculator interface and handles user interactions.

- **State Variables**:
  - `equation`: Stores the current equation input by the user.
  - `answer`: Stores the result of the evaluated expression.
  - `calculated`: Boolean flag to check if the result was recently calculated.

- **Functions**:
  - `handleButtonClick(label)`: Updates the equation state when a button is clicked.
  - `handleArithmetic(label)`: Appends arithmetic operators to the equation.
  - `handleCalculate()`: Evaluates the expression, handles square roots, and checks for errors.
  - `handleClear()`: Clears the equation and result.

### Button Component

The `Button` component is a reusable button that accepts a `label` and an `onClick` handler as props.
