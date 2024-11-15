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

// TS doesn't like this
// printName({first: "Mick", last: "Jagger", age: 34})

// TS is fine with this:
const singer = {first: "Mick", last: "Jagger", age: 34, isAlive: true}
printName(singer)
// This will cause the function to ONLY check the defined parameters. Any additional parameters are ignored. 

type Point = {
    x: number,
    y: number
};
// function doublePoint(point: {x: number, y: number}): {x: number, y: number}{
//     return {x: point.x*2, y: point.y*2}
// }

function randomCoordinate2(point: Point): Point {
    return {x: Math.random(), y: Math.random()}
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 }
}

type Song = {
    title: string,
    artist: string, 
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
};

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

function calculatePayout(song: Song): number {
    return song.numStreams * .0033;
}

const mySong: Song = {
    title: "Saturn",
    artist: "Sleeping At Last",
    numStreams: 1234567890,
    credits: {
        producer: "Someone cool",
        writer: "A Writer"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings)
printSong(mySong);