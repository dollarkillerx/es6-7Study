/**
 场景1
 假定有一个数值数组(A),将A数组中的值以双倍的形式放到B数组中
 */

let numbers = [1, 2, 3];
let doubledNumbers = [];
numbers.forEach(function (value) {
    doubledNumbers.push(value * 2)
});
console.log(doubledNumbers);

let doubledNumbers2 = numbers.map(function (value) {
   return value * 2
});
console.log(doubledNumbers2);


/**
 场景2
 假定有一个对象数组(A),将A数中对象某一个数学存储到B数组中
 */

let cars = [
    {model:"Buick",price:"CHEAP"},
    {model: "BMW",price: "expensive"}
];

let prices = cars.map(function (value, index) {
    return value.price
});
console.log(prices);