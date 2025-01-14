// Union types allow you to specify multiple data types for a specific variable. 
let age: number | string = 21; 
age = "21";
age = 23; 

type Point = {
    x: number, 
    y: number
}

type Loc = {
    lat: number, 
    long: number 
}

let coordinates: Point | Loc = {x: 1, y: 34}
coordinates = {lat: 321.213, long: 23.334}

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`)
}

printAge(23)
printAge("87")
// Typescript will throw an error in the function if a method is called that is only valid with one data type
function calcTax(price: number | string, tax: number) {
    // Example: replace is not a valid method on a number 
    // price.replace("$", "")
    // Example: a string cannot be multiplied, so typescript throws this error: 
    // return price * tax

    // Use Type Narrowing to fix this
    if (typeof price === "string"){
        price = parseFloat(price.replace("$", ""))
    } 
    return price * tax
    // else {
        // Typescript is smart enough to know that the if statement narrows the 'else' type to a number 
    //     price * tax
    // }

}

// Union Types and Arrays
// If you need an array that holds multiple data types, use the (datatype)[] format
// const stuff: (number | string)[] = [1, 2, "1", 2]


// Literal Types
// this defines the answers more strictly 

// let zero: 0 = 0; 
// zero = 2; 
// let hi: "hi" = "HI"

let mood: "Happy" | "Sad" = "Happy"
mood = "Sad"
// mood = "Angry"

// Set options for a Type
type DayOfWeek = 
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
; 

// let today: DayOfWeek = "Wed"