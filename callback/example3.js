function add(a, b){
    return a+b;
}

function multiply(a, b){
    return a*b;
}

function calculation(number1, number2, calctype){
    return calctype(number1, number2);
}

console.log(calculation(2, 3, multiply));