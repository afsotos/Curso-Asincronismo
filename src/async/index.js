const doSomthingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const doSomthing = async () => {
    const something = await doSomthingAsync();
    console.log(something);
}

console.log('Before');
doSomthing();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomthingAsync();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
