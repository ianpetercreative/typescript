const activeUsers: string[] = []; 
activeUsers.push("steven")
// activeUsers.push(5)

const ageList: number[] = [45, 56, 13]
ageList[0] = 99; 
// ageList[1] = "56"; 

const testResults: boolean[] = []; 


// Alternative Syntax:
const activeUsersAlt: Array<string> = []; 
const ageListAlt: Array<number> = [45, 56, 13]
const testResultsAlt: Array<boolean> = []; 


// Not limited to just Primatives
// Custom Types can also be used in the same way
type Point2 = {
    x: number,
    y: number
}

const coords: Point[] = [];
const coordsAlt: Array<Point> = [];
coords.push({x: 23, y: 18})


// Multidimensional Arrays 
// Addiontional array brackets must be added to the definition 
const board: string[][] = [["X", "O", "X"],["X", "O", "X"],["X", "O", "X"]]

const demo: number[][][] = [[[1]]]
// Best to avoid too many layers 



