"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Student = /** @class */ (function () {
    function Student(firstName, m, lastName) {
        this.firstName = firstName;
        this.m = m;
        this.lastName = lastName;
        this.fullName = firstName + " " + m + " " + lastName;
    }
    return Student;
}());
var user = new Student('a', 'b', 'c');
var g = new person_1.default({ firstName: '1', lastName: '2' });
if (g.say === 'hi~ 1 2') {
    console.log(g.say);
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var name = greeter(user);
//# sourceMappingURL=student.js.map