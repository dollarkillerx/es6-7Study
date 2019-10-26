let colors = ["red","blue","green"];

colors.forEach(function (value, index, array) {
    console.log(value , index, array)
});

let numbers = [1,2,3,4,5,6];

let i = 0 ;
numbers.forEach(function (value) {
    i += value
});

console.log(i);