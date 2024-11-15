function square(num: number): number {
    return num * num;
};


function greet(person: string){
    return `Hi there, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
    
};

greet("Ian")
doSomething("Ian", 30, true)
// doSomething(true, "Ian", 30)


function greetDefault(person: string = "Stranger"){
    return `Hi there, ${person}`;
}


function rando(num: number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num; 
}

const add = (x: number, y: number): number => {
    return x+y; 
}

const colors = ["red", "blue", "green"];

// The type below is inferred because of the colors context 
colors.map(color => {
    return color.toUpperCase()
})

function printTwice(mes: string): void {
    console.log(mes)
    console.log(mes)
}
// Void indicates that the function does not return any value 


function makeError(mes: string): never {
    throw new Error(mes);
}

function gameLoop(){
    while(true){
        console.log("GAME LOOP RUNNING")
    }
}