function addTwo(num: number): number {
    return num + 2;
    // return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    return 
}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}


loginUser('h', 'h@h.com')



// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }


const getHello = (s: string): string => {
    return ''
}


const heroes = ['thor', 'spiderman', 'iron man'];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void {
    console.log(errmsg);

}

// From documentation: https://www.typescriptlang.org/docs/handbook/2/functions.html
function handleError(errmsg: string) {
    throw new Error(errmsg);

}



let myValue = addTwo(2);
console.log('function addTwo: ', myValue);
console.log('function getUpper: ', getUpper('Cahu'));
// console.log('function signUpUser: ', signUpUser('Matt', 'cahu@mail.com', false));

export {}