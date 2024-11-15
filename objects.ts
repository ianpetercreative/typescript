const dog = {
    name: "Loki",
    breed: "Labrador",
    age: 3
}

function printName(person: {first: string; last: string}){
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas", last: "Jenkins"})

// {x: number, y: number}
let coordinate:{x: number, y: number} = { x: 34, y: 2 }

function randomCoordinate(): {x: number, y: number}{
    return {x: Math.random(), y: Math.random()}
}