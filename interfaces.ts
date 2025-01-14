// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 213, y:3}

interface Point {
    x: number,
    y: number
}

const pt: Point = {x: 123, y: 321}

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    // sayHi: () => string,
    sayHi(): string,
}

const thomas: Person = {
    id: 234,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: () => {
        return "Hello!"
    }
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(discount: number){
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price; 
    }
}

console.log(shoes.applyDiscount(0.4));