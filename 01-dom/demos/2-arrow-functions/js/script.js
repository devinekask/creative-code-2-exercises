function normalFunction() {
    console.log('Normal function');
}

const arrowFunction = () => {
    console.log('Arrow function');
}

const withReturn = () => {
    console.log('Arrow function with return');
    return 'Arrow function with return';
}

const withParameters = (param1, param2) => {
    console.log('With parameters:', param1, param2);
}

const singleLine = () => console.log('Single line arrow function');

const singleLineWithReturn = () => "Hello, I will be returned";


const init = () => {
    normalFunction();
    arrowFunction();
    withReturn();
    withParameters('Hello', 'World');
    singleLine();

    const returnValue = singleLineWithReturn();
    console.log(returnValue);
}

init();