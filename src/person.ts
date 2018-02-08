interface Person {
    firstName: string,
    lastName: string
}

class Greeter {
    say: string
    constructor(person: Person) {
        this.say =  `hi~ ${person.firstName} ${person.lastName}`;
    }
}

const wang = { firstName: 'wang', lastName: 'lao' };
let greeter = new Greeter(wang);

export default Greeter;