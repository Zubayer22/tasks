function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }
  
  // Test the function
  const inputStr = "hello world";
  const outputStr = reverseString(inputStr);
  console.log(outputStr); 
  