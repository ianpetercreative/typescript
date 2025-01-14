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


interface Dog {
    name: string,
    age: number
}

interface Dog {
    breed: string,
    bark(): string
}

const elton: Dog = {
    name: "Loki",
    age: 3,
    breed: "Labrador",
    bark() {
        return "WOOF WOOF"
    }
}

interface ServiceDog extends Dog {
    job: "Drug Sniffer" | "Bomb Sniffer" | "Guide Dog"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Golden Retriever",
    bark() {
        return "Bark!"
    },
    job: "Bomb Sniffer"
}

interface Applicant {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Applicant, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 12345,
    email: "email@email.com",
    level: "Senior",
    languages: ['JS', 'Python']
}

// KEY DIFFERENCES BETWEEEN TYPES AND INTERFACES
// Pros to Interfaces:
// 1. Adding new properties
// 2. Extending properties (similar to OOP Classes)

// Have to use a Type Alias if we're not describing the shape of an object
type Color = "Red" | "Blue"

// Types are static/immutable. They can't be added to. 
type Chicken = {
    breed: string
}
type Chicken = {
    name: string
}

// Interfaces use the "extend" keyword similar to object oriented programming with Classes
// Types can do something similar but the syntax is unusual and not always clean to look at 
type Name = {
    name: string;
}
type Human = Name & {
    age: number;
}
const jerry: Human = {
    name: 'Jerry',
    age: 42
}