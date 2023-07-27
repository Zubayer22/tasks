function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must contain at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("All elements in the array are the same.");
    }
  
    return secondSmallest;
  }
  
  // Test the function
  const inputArr = [5, 3, 9, 1, 7, 1, 4];
  const secondSmallestNum = findSecondSmallest(inputArr);
  console.log(secondSmallestNum); // Output: 3
  