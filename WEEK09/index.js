// A simple function with a callback
function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
  }
  
  // A callback function
  function sayBye() {
    console.log('Bye!');
  }
  
  // Calling greet and passing sayBye as callback
  greet('Shreya', sayBye);
  
  // ---------------------------------------------
  
  // Another example: math operations using callback
  function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
  }
  
  // A callback to display result
  function displayResult(result) {
    console.log('The result is:', result);
  }
  
  // Calling calculate
  calculate(5, 7, displayResult);
  
  // ---------------------------------------------
  
  // A simulated asynchronous callback (like reading a file)
  console.log('Start');
  
  setTimeout(() => {
    console.log('This happens after 2 seconds (async callback)');
  }, 2000);
  
  console.log('End');
  