const Intern = require('../lib/Intern');
const Intern = new Intern('sumaya','07878','sumayabile8@gmail.com','Birmingham');

test('test if we can get the constructor values for the engineer object', () =>{
     expect(Intern.name).toBe('sumaya');
     expect(Intern.id).toBe('07878');
     expect(Intern.email).toBe('sumayabile8@gmail.com');
     expect(Intern.School).toBe('Birmingham');

});

test('test if we can get the name from the getName() method', () =>{
     expect(Intern.getName()).toBe('sumaya');

});
test('test if we can get the id from the getId() method', () =>{
    expect(Intern.getId()).toBe('07878');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(Intern.getEmail()).toBe('sumayabile8@gmail.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(Intern.getSchool()).toBe('Birmingham');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(Intern.getRole()).toBe('Intern');

});