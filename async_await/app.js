/**
 * Async And Await
 */

async function myFunc() {
    // return "Hello World!";
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("HelloWorld", 2000))
    });


    // 返回错误信息
    const error = false;
    if (!error) {
        // 等待resolve 执行完毕之后,才会执行
        const res = await promise;
        return res
    } else {
        await Promise.reject(new Error("error"))
    }

}

myFunc()
    .then(data => console.log(data))
    .catch(err => console.log(err));

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data
}

getUsers().then(user => console.log(user));