const Engineer = require('../lib/Engineer');
const testEngineer = new engineer('sumaya','07878','sumayabile8@gmail.com','SuM949');

test('test if we can get the constructor values for the engineer object', () =>{
     expect(testEngineer.name).toBe('sumaya');
     expect(testEngineer.id).toBe('07878');
     expect(testEngineer.email).toBe('sumayabile8@gmail.com');
     expect(testEngineer.githubUsername).toBe('SuM949');

});

test('test if we can get the name from the getName() method', () =>{
     expect(testEngineer.getName()).toBe('sumaya');

});
test('test if we can get the id from the getId() method', () =>{
    expect(testEngineer.getId()).toBe('07878');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(testEngineer.getEmail()).toBe('sumayabile8@gmail.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(testEngineer.getSchool()).toBe('Birmingham');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(testEngineer.getRole()).toBe('engineer');

});