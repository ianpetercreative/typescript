// type Point = {
//     x: number,
//     y: number
// }
var pt = { x: 123, y: 321 };
var thomas = {
    id: 234,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: function () {
        return "Hello!";
    }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
