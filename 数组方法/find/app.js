/**
 * 场景1
 * 假设有一个对象数组(A),找到符合条件的对象
 */
let users = [
    {name:'Jill'},
    {name:'Alex'},
    {name:'Bill'}
];
let user;
users.forEach(function (value) {
   if (value.name === 'Alex' ) {
       user = value.name;
       return
   }
   console.log("-")
});
console.log(user);

user = users.find(function (val) {
    return val.name === 'Bill';
});
console.log(user);



/**
 * 场景2
 * 假定有一个对象数组(A),更具指定对象的条件找到数组中符合条件的对象
 */

let posts = [
    {id:1,title:"Node.js"},
    {id:2,title: "React.js"}
];

let comment = {postId:1,content:'HelloWorld!'};

function postForComment(posts,comment) {
    return posts.find(function (val) {
        return val.id === comment.postId
    })
}

console.log(postForComment(posts,comment));