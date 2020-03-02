const doSomethingAsync = () =>{
    return new Promise((resoleve,reject) => {
        (true)//operacion ternaria
        ?  setTimeout(() => {
            resoleve('Do Something Async')
        }, 3000)
        : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const someThing = await doSomethingAsync();
    console.log(someThing);
}

console.log('Before');
doSomething(); 
console.log('After');


const anotherFunction = async () => {
    try{
        const someThing = await doSomethingAsync()
        console.log(someThing);
    }catch(err){
        console.log(err);
    }
}

console.log('Before1');
anotherFunction();
console.log('After1');