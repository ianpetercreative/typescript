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