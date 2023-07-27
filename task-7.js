function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let total = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const nextNumeral = romanNumeral[i + 1];
      
      if (romanNumeralsMap[currentNumeral] < romanNumeralsMap[nextNumeral]) {
        total -= romanNumeralsMap[currentNumeral];
      } else {
        total += romanNumeralsMap[currentNumeral];
      }
    }
  
    return total;
  }
  
  // Test the function
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
  console.log(romanToInt(romanNumeral1)); // Output: 9
  console.log(romanToInt(romanNumeral2)); // Output: 21
  