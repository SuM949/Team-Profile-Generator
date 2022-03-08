const Manager = require('../lib/Manager');
const testManager = new Manager('sumaya','07878','sumayabile8@gmail.com','821');

test('test if we can get the constructor values for the manager object', () =>{
     expect(testManager.name).toBe('sumaya');
     expect(testManager.id).toBe('07878');
     expect(testManager.email).toBe('sumayabile8@gmail.com');
     expect(testManager.officeNumber).toBe('821');

});

test('test if we can get the name from the getName() method', () =>{
     expect(testManager.getName()).toBe('sumaya');

});
test('test if we can get the id from the getId() method', () =>{
    expect(testManager.getId()).toBe('07878');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(testManager.getEmail()).toBe('sumayabile8@gmail.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(testManager.getOfficeNumber()).toBe('821');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(testManager.getRole()).toBe('Manager');

});