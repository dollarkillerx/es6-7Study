let promise = new Promise((resolve, reject) => {
    // 实现延时执行
    setTimeout(() => {
        resolve();
    }, 3000)
});

promise.then(() => {
    console.log("ok")
}).catch(function () {
    console.log("err")
});

let url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    });