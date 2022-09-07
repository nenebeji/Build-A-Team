const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Intern';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;