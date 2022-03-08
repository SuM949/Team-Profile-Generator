const Intern = require('../lib/Intern');
const testIntern = new Intern('sumaya','07878','sumayabile8@gmail.com','Birmingham');

test('test if we can get the constructor values for the engineer object', () =>{
     expect(testIntern.name).toBe('sumaya');
     expect(testIntern.id).toBe('07878');
     expect(testIntern.email).toBe('sumayabile8@gmail.com');
     expect(testIntern.school).toBe('Birmingham');

});

test('test if we can get the name from the getName() method', () =>{
     expect(testIntern.getName()).toBe('sumaya');

});
test('test if we can get the id from the getId() method', () =>{
    expect(testIntern.getId()).toBe('07878');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(testIntern.getEmail()).toBe('sumayabile8@gmail.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(testIntern.getSchool()).toBe('Birmingham');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(testIntern.getRole()).toBe('Intern');

});