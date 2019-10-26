/**
 * 场景1
 * 假定有一个对象数组(A),获取数组中指定类型的对象到B数组中
 */
let products = [
    {name: "cucumber", type: "vegetable"},
    {name: "banana", type: "fruit"},
    {name: "celery", type: "vegetable"},
    {name: "orange", type: "fruit"}
];

let filteredProducts = [];
products.forEach(function (value, index, array) {
    if (value.type === 'fruit') {
        filteredProducts.push(value)
    }
});

console.log(filteredProducts);

let filteredProducts2 = products.filter(function (value, index, array) {
    return value.type === 'fruit'
});
console.log(filteredProducts2);


/**
 * 场景2
 * 假定有一个对象数组(A),过滤不满足以下条件的对象
 * 条件: 蔬菜 数量大于0,价格小于10
 */
products = [
    {name: "cucumber", type: "vegetable", quantity: 1, price: 1},
    {name: "banana", type: "fruit", quantity: 10, price: 16},
    {name: "celery", type: "vegetable", quantity: 30, price: 10},
    {name: "orange", type: "fruit", quantity: 3, price: 6}
];
let filteredProducts3 = products.filter(function (val) {
    return val.type === "vegetable"
        && val.quantity > 0
        && val.price < 10
});
console.log(filteredProducts3);

/**
 * 场景3
 * 假定有两个数组(A,B),更具A中id值,过滤B数组中不符合的数据
 */
let post = {id: 4, title: "Javascript"};
let comments = [
    {postId: 4, content: "Angular"},
    {postId: 3, content: "Vue"},
    {postId: 2, content: "Node"},
    {postId: 4, content: "React"},
];

function commentsForPost(post, comments) {
    return comments.filter(function (val) {
        return val.postId != post.id
    })
}

console.log(commentsForPost(post, comments));