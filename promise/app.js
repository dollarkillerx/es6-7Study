/**
 * 构造函数: Promise
 * 一个牛逼闪闪的东西
 */
let promise = new Promise(((resolve, reject) => {
    let data = {
        msg:"ok",
        code:"200"
    };
    resolve(data);
    // reject();
}));

promise
    .then(function (data) {
        console.log(data.msg);
        console.log("then")
    })
    .then(function () {
        console.log("then")
    })
    .catch(function () {
        console.log("catch")
    });