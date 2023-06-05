function greet(name: string){
    console.log(`Hello, ${name}`);
}

function test(){
    console.log('This is just a test')
}


function calculate(a: number, b: number){
    let intA: number = a;
    let intB: number = b;
    console.log(`${intA + intB}`)
}

greet("Jakob");
test()

export {};