function addNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      alert("Error: Please enter valid numbers");
      return NaN;
    }
    return num1 + num2;
  }
  
  function subtractNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      alert("Error: Please enter valid numbers");
      return NaN;
    }
    return num1 - num2;
  }
  
  function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      alert("Error: Please enter valid numbers");
      return NaN;
    }
    return num1 * num2;
  }
  
  function divideNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      alert("Error: Please enter valid numbers");
      return NaN;
    } else if (num2 === 0) {
      alert("Error: Cannot divide by zero");
      return NaN;
    }
    return num1 / num2;
  }
  
  function findMinimumNumber(arr) {
    if (!Array.isArray(arr)) {
      alert("Error: Please enter an array");
      return NaN;
    }
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minNum) {
        minNum = arr[i];
      }
    }
    return minNum;
  }
  
  function findMaximumNumber(arr) {
    if (!Array.isArray(arr)) {
      alert("Error: Please enter an array");
      return NaN;
    }
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum;
  }
  
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  
  if (num1 === "" || num2 === "") {
    alert("Ups, looks like one of the fields is empty");
  } else {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    if (num1 < num2) {
      const confirmOperation = confirm("Are you sure you want to continue the operation, the second number is bigger than the first one?");
      if (confirmOperation) {
        alert(`Difference: ${subtractNumbers(num1, num2)}`);
      }
    } else {
      alert(`Sum: ${addNumbers(num1, num2)}\nDifference: ${subtractNumbers(num1, num2)}\nMultiplication: ${multiplyNumbers(num1, num2)}\nDivision: ${divideNumbers(num1, num2)}`);
    }
  }
  
  let arr = [3, 5, 1, 8, 2];
  alert(`Minimum number: ${findMinimumNumber(arr)}\nMaximum number: ${findMaximumNumber(arr)}`);