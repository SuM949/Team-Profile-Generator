const Engineer = require('../lib/Intern');
const engineer = new Intern('sumaya','07878','sumayabile8@gmail.com','SuM949');

test('test if we can get the constructor values for the engineer object', () =>{
     expect(engineer.name).toBe('sumaya');
     expect(engineer.id).toBe('07878');
     expect(engineer.email).toBe('sumayabile8@gmail.com');
     expect(engineer.githubUsername).toBe('SuM949');

});

test('test if we can get the name from the getName() method', () =>{
     expect(engineer.getName()).toBe('sumaya');

});
test('test if we can get the id from the getId() method', () =>{
    expect(engineer.getId()).toBe('07878');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(engineer.getEmail()).toBe('sumayabile8@gmail.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(engineer.getSchool()).toBe('Birmingham');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(engineer.getRole()).toBe('engineer');

});