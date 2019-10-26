### 比较
```
"1.23" == 1.23

0 == false

null == undefined

new Object() == new Object()

[1,2] == [1,2]
```

### 包装对象
```javascript
let str = "string";
let strObj = new String("string");
console.log(str)
console.log(strObj)
```

### 类型检测
```
typeof 100 "number"
typeof true "boolean"
typeof function "function"
typeof(undefined) "undefined"
typeof new Object() "object"
typeof [1,2]  "object"
typeof NaN "number"
typeof null "object"
```

### instanceof
```javascript
function Person() {}

function Student(name) {return this.name = name}

Student.prototype = new Person();

Student.prototype.constructor = Student;

let bosn = new Student("小明");

let c = bosn instanceof Student;
console.log("c: ",c);

let one = new Person();
let cc = one instanceof Person;
console.log("cc: ",cc);

let ccc = one instanceof Student;
console.log("ccc: ",ccc);

let cccc = bosn instanceof  Person;
console.log("cccc: ",cccc);
```

### try catch
```javascript
try {
    //代码块
}
catch(ex) {
 // 捕获特定异常
}
finally {
  // 都会执行
}
```