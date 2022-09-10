const Engineer = require('../lib/Engineer');

describe ('Engineer', () => {
    describe('Initialization', () => {
        it('should return an object when called with the "new" "keyword"', () => {
            const engineer = new Engineer();
        
            expect(typeof(engineer)).toEqual('object');
        });

        it('should set "github" when created', () => {
            const result = 'cindy24'
            const engineer = new Engineer('Cindy', 224, 'cindy@test.com', result);
        
            expect(engineer.github).toEqual(result);
        });
    });

    describe('getName', () => {
        it('should return the "name" value when called', () => {
            const engineer = new Engineer('Cindy', 224, 'cindy@test.com', 'cindy24');

            expect(engineer.getName()).toEqual('Cindy');
        });
    });

    describe('getID', () => {
        it('should return the "id" value when called', () => {
            const engineer = new Engineer('Cindy', 224, 'cindy@test.com', 'cindy24');

            expect(engineer.getID()).toEqual(224);
        });
    });

    describe('getEmail', () => {
        it('should return the "email" value when called', () => {
            const engineer = new Engineer('Cindy', 224, 'cindy@test.com', 'cindy24');

            expect(engineer.getEmail()).toEqual('cindy@test.com');
        });
    });

    describe('getGithub', () => {
        it('should return the "github" value when called', () => {
            const engineer = new Engineer('Cindy', 224, 'cindy@test.com', 'cindy24');

            expect(engineer.getGithub()).toEqual('cindy24');
        });
    });

    describe('getRole', () => {
        it('should return "Engineer"', () => {
            const engineer = new Engineer('Cindy', 224, 'cindy@test.com', 'cindy24');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});