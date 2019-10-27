class Car {
    constructor(brand) {
        this.brand = brand
    }

    show() {
        console.log(`本台车的品牌是${this.brand}`);
    }
}

class Lexus extends Car {
    constructor(brand, lineup) {
        super(brand);
        this.lineup = lineup
    }

    getPrice() {
        switch (this.lineup) {
            case "Rx":
                return 60;
            case "Nx":
                return 40;
            default:
                throw new Error("未知车辆类型");
        }
    }
}

let myCar = new Lexus("Lexus", "Rx");
myCar.show();
console.log("本车的价格是:", myCar.getPrice());