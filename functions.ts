function square(num: number){
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