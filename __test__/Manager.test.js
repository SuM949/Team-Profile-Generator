const Manager = require('../lib/Manager');
const manager = new Manager('sumaya','07878','sumayabile8@gmail.com','821');

test('test if we can get the constructor values for the manager object', () =>{
     expect(manager.name).toBe('sumaya');
     expect(manager.id).toBe('07878');
     expect(manager.email).toBe('sumayabile8@gmail.com');
     expect(manager.officeNumber).toBe('821');

});

test('test if we can get the name from the getName() method', () =>{
     expect(manager.getName()).toBe('sumaya');

});
test('test if we can get the id from the getId() method', () =>{
    expect(manager.getId()).toBe('07878');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(manager.getEmail()).toBe('sumayabile8@gmail.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(manager.getOfficeNumber()).toBe('821');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(manager.getRole()).toBe('Manager');

});