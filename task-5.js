function calculator(num1, num2, operator) {
    const expression = `${num1} ${operator} ${num2}`;
    const result = eval(expression);
  
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid input or operation!");
    }
  
    return result;
  }
  
  // Test the function
  const number1 = 10;
  const number2 = 5;
  const operation = "+";
  const result = calculator(number1, number2, operation);
  console.log(result); 
  