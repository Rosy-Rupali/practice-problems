function factorial(num) {

    for (var i = num - 1; i >= 1; i--) {
      num = num * i; 
    }
    console.log("factorial", num);
}
//take input
const ps = require("prompt-sync")
const prompt = ps();
const num = prompt('Enter the number');

factorial(num);