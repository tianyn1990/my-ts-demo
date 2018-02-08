"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = /** @class */ (function () {
    function Greeter(person) {
        this.say = "hi~ " + person.firstName + " " + person.lastName;
    }
    return Greeter;
}());
var wang = { firstName: 'wang', lastName: 'lao' };
var greeter = new Greeter(wang);
exports.default = Greeter;
//# sourceMappingURL=person.js.map