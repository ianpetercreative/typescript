let movieTitle: string = 'Amadeus'; 
movieTitle = "Arrival";
// Typescript won't allow you to assign a different type after the type has been declared
// movieTitle = 8;
// Typescript won't allow an invalid method
// movieTitle.round(); 
// You CAN use a method that works with the data type
movieTitle.toUpperCase(); 


let numCatLives: number = 9;
numCatLives += 1; 
// numCatLives = "Zero";

let gameOver: boolean = false; 
gameOver = true;
// gameOver = "True"; 



// Type Inference 
let tvShow = "The Office";

// Typescript infers the type of the value based on the first instance of that variable. 


let thing: any = "hello"; 
thing = 27;
thing = true; 
thing(); 
thing.toUpperCase(); 


const movies = ['deadpool', 'deadpool 2', 'deadpool and wolverine'];
let foundMovie: string; 
// let foundMovie; By not declaring a type on this, it initializes to 'any'. It can cause problems later on. 
for(let movie of movies) {
    if (movie === 'deadpool and wolverine') {
        foundMovie = 'deadpool and wolverine'; 
    }
}

// foundMovie();
// foundMovie = 1; 