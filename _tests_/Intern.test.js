const Intern = require('../lib/Intern');

describe ('Intern', () => {
    describe('Initialization', () => {
        it('should return an object when called with the "new" "keyword"', () => {
            const intern = new Intern();
        
            expect(typeof(intern)).toEqual('object');
        });

        it('should set "school" when created', () => {
            const result = 'University of Birmingham'
            const intern = new Intern('Cindy', 224, 'cindy@test.com', result);
        
            expect(intern.school).toEqual(result);
        });
    });

    describe('getName', () => {
        it('should return the "name" value when called', () => {
            const intern = new Intern('Cindy', 224, 'cindy@test.com', 'University of Birmingham');

            expect(intern.getName()).toEqual('Cindy');
        });
    });

    describe('getID', () => {
        it('should return the "id" value when called', () => {
            const intern = new Intern('Cindy', 224, 'cindy@test.com', 'University of Birmingham');

            expect(intern.getID()).toEqual(224);
        });
    });

    describe('getEmail', () => {
        it('should return the "email" value when called', () => {
            const intern = new Intern('Cindy', 224, 'cindy@test.com', 'University of Birmingham');

            expect(intern.getEmail()).toEqual('cindy@test.com');
        });
    });

    describe('getSchool', () => {
        it('should return the "school" value when called', () => {
            const intern = new Intern('Cindy', 224, 'cindy@test.com', 'University of Birmingham');

            expect(intern.getSchool()).toEqual('University of Birmingham');
        });
    });

    describe('getRole', () => {
        it('should return "Intern"', () => {
            const intern = new Intern('Cindy', 224, 'cindy@test.com', 'University of Birmingham');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
});
