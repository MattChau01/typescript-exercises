const User = {
    name: 'Matt',
    email: 'matt@email.com',
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

// createUser({name: 'Matt', isPaid: false});
// if we want to add another unput `email` into the object above, there will be an error because the function specified:
//   `createUser` only has to parameters: `name` and `isPaid`
// the work around is to create a new variable and pass it as a paramter into the function as such:


let newUser = {name: 'Matt', isPaid: false, email: 'matt@mail.com'}

createUser(newUser)



function createCourse():{name: string, price: number}{
    return {
        name: 'reactjs',
        price: 499
    }
}


export {}
