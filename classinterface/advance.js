"use strict";
class User {
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstname + " " + this.lastName;
    }
}
const user = new User("Jhon", "Doe");
console.log(user.fullName);
