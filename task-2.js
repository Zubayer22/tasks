function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  // Test the function
  const inputArr = [2, -5, 10, -3, 7];
  const outputSum = sumOfPositiveNumbers(inputArr);
  console.log(outputSum);
  