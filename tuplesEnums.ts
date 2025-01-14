// const stuff2: (string | number)[] = ['asd', 'asdasd', 'asdasd', 2];

// const color2: number[] = [23, 45, 234, 543];

// const color: [number, number, number] = [255, 0, 255, 3];

// Tuples
// Tuples are exclusive to Typescript (not in JS). 
// Tuples are array of fixed lengths and ordered with specific types. 
// It's a very rigid array. Order matters within the array. 

// The first element MUST BE a number. The second element MUST BE a string. 
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"]
// goodRes[0] = "200"   – Can't do this
// goodRes.push(123)
// ☝️ Type script allows this but it isn't advised. Just a limitation of TypeScript
// Same with goodRes.pop(); 

// Tuples just have very specific applications where you're working with
// simple data. Ex. RGB Numbers. It's always 3 numbers in a specific order.

