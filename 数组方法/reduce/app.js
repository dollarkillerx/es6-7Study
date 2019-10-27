let numbers = [10,20,30];

let sumVal = numbers.reduce(function (sum,number) {
    return sum + number
},0); // 0是sum的初始值

console.log(sumVal);