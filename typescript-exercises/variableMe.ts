let greetings: string = 'Hello Matt';

greetings.toLocaleLowerCase()
console.log(greetings);

// number

let userId: number = 345
userId.toFixed(2)


// boolean

let isLoggedIn: boolean = false

export {}


// with `noImplicitAny` in code

let hero: string;

function getHero() {
    return 'thor';
}

hero = getHero();