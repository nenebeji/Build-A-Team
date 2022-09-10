const Employee = require('../lib/Employee');

describe ('Employee', () => {
    describe('Initialization', () => {
        it('should return an object when called with the "new" "keyword"', () => {
            const employee = new Employee();
        
            expect(typeof(employee)).toEqual('object');
        });

        it('should set "name", "id" and "email" when created', () => {
            const employee = new Employee('Cindy', 224, 'cindy@test.com');
        
            expect(employee.name).toEqual('Cindy');
            expect(employee.id).toEqual(224);
            expect(employee.email).toEqual('cindy@test.com');
        });
    });

    describe('getName', () => {
        it('should return the "name" value when called', () => {
            const employee = new Employee('Cindy', 224, 'cindy@test.com');

            expect(employee.getName()).toEqual('Cindy');
        });
    });

    describe('getID', () => {
        it('should return the "id" value when called', () => {
            const employee = new Employee('Cindy', 224, 'cindy@test.com');

            expect(employee.getID()).toEqual(224);
        });
    });

    describe('getEmail', () => {
        it('should return the "email" value when called', () => {
            const employee = new Employee('Cindy', 224, 'cindy@test.com');

            expect(employee.getName()).toEqual('cindy@test.com');
        });
    });

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const employee = new Employee('Cindy', 224, 'cindy@test.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});