let list = [10, 20, 30];
let myStr = '你好啊';
let myMap = new Map();

myMap.set("Js", "JavaScript");
myMap.set('Pl', 'Perl');
myMap.set('Py', 'Python');

for (let val of list) {
    console.log(val)
}

myMap.forEach((k, v) => {
    console.log(k, " : ", v)
});

// 简单迭代
let it = myMap.values(); // 迭代器
let tmp;
while (tmp = it.next()) {
    if (tmp.done) break; // 获取完
    console.log(tmp.key, tmp.value, tmp.done)
}