let str1 = String("HelloWorld");
let str2 = String("HelloWorld");

console.log(str1 == str2);
console.log(str1 === str2);

// 比较内部id
let s1 = Symbol("MySymbol");
let s2 = Symbol("MySymbol");

console.log(s1);
console.log(s2);
console.log(typeof s1);
console.log("s1 String: ",s1.toString());
console.log(s1 == s2);
console.log(s1 === s2);