/**
 * 场景1
 * 计算对象数组中每一个电脑的操作系统都是可用的.
 * 大于16位操作系统表示可用,否则不可用
 */

let computers = [
    {name: 'Apple', ram: 16},
    {name: 'Apple', ram: 4},
    {name: 'Apple', ram: 32}
];

let everyComputersCanRunProgram = true;
let someComputersCanRunProgram = false;
computers.forEach(function (val) {
    if (val.ram < 16) {
        everyComputersCanRunProgram = false;
        someComputersCanRunProgram = true;
    }
});

/**
 * Every: 一假即假
 * Some: 一真即真
 */
let every = computers.every(function (value) {
    return value.ram > 16
});
console.log(every);

/**
 * 场景2
 * 假设有一个注册页面,判断所有input内容长度是否大于0
 */

function Filed(val) {
    this.val = val;
}

Filed.prototype.validate = function () {
    return this.val.length > 0;
};

let username = new Filed("dollarKiller");
let telephone = new Filed("188888888");


console.log(username.validate());