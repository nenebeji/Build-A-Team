const Manager = require('../lib/Manager');

describe ('Manager', () => {
    describe('Initialization', () => {
        it('should return an object when called with the "new" "keyword"', () => {
            const manager = new Manager();
        
            expect(typeof(manager)).toEqual('object');
        });

        it('should set "officeNumber" when created', () => {
            const result = 2
            const manager = new Manager('Cindy', 224, 'cindy@test.com', result);
        
            expect(manager.officeNumber).toEqual(result);
        });
    });

    describe('getName', () => {
        it('should return the "name" value when called', () => {
            const manager = new Manager('Cindy', 224, 'cindy@test.com', 2);

            expect(manager.getName()).toEqual('Cindy');
        });
    });

    describe('getID', () => {
        it('should return the "id" value when called', () => {
            const manager = new Manager('Cindy', 224, 'cindy@test.com', 2);

            expect(manager.getID()).toEqual(224);
        });
    });

    describe('getEmail', () => {
        it('should return the "email" value when called', () => {
            const manager = new Manager('Cindy', 224, 'cindy@test.com', 2);

            expect(manager.getEmail()).toEqual('cindy@test.com');
        });
    });

    describe('getOfficeNumber', () => {
        it('should return the "officeNumber" value when called', () => {
            const manager = new Manager('Cindy', 224, 'cindy@test.com', 2);

            expect(manager.getOfficeNumber()).toEqual(2);
        });
    });

    describe('getRole', () => {
        it('should return "Manager"', () => {
            const manager = new Manager('Cindy', 224, 'cindy@test.com', 2);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});
