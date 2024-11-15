var dog = {
    name: "Loki",
    breed: "Labrador",
    age: 3
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
// {x: number, y: number}
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// TS doesn't like this
// printName({first: "Mick", last: "Jagger", age: 34})
// TS is fine with this:
var singer = { first: "Mick", last: "Jagger", age: 34, isAlive: true };
printName(singer);
// function doublePoint(point: {x: number, y: number}): {x: number, y: number}{
//     return {x: point.x*2, y: point.y*2}
// }
function randomCoordinate2(point) {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
function calculatePayout(song) {
    return song.numStreams * .0033;
}
var mySong = {
    title: "Saturn",
    artist: "Sleeping At Last",
    numStreams: 1234567890,
    credits: {
        producer: "Someone cool",
        writer: "A Writer"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
