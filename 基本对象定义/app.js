let title = "goto es6";
let price = 25;
let publish = "马云出版社";

let book = {
    title,price,publish,
    toString() {
        console.log(`<<${this.title}>> is ${this.price}Cny.`)
    }
};

book['lang'] = 'zh_Cn';

console.log(book);
book.toString();