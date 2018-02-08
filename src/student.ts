import Greeter from './person';

interface Person {
    firstName: string,
    lastName: string
}

class Student {
    fullName: string
    constructor(public firstName, public m, public lastName) {
        this.fullName = `${firstName} ${m} ${lastName}`
    }
}

let user = new Student('a', 'b', 'c');

let g = new Greeter({firstName: '1', lastName: '2'});

if(g.say === 'hi~ 1 2') {
    console.log(g.say);
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let name = greeter(user);