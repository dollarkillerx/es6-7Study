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

