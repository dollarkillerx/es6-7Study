class Player {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    show() {
        console.log(`${this.name}性别是${this.sex}.`)
    }

    static info() {
        console.log("this is 球员class,您可以建立属于自己的球员")
    }
}

let player = new Player("库里","man");

console.log(player.name,player.sex);

player.show();

Player.info();