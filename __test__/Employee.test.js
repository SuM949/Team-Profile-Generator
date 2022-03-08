const Employee = require('../lip/Employee');
const testEmployee = new Employee('sumaya', '07878','sumayabile8@gmail.com');

test ('test if we can get the constructor values for the employee object', () =>{
       expect(testEmployee.name).toBe('sumaya');
       expect(testEmployee.id).toBe('07878');
       expect(testEmployee.email).toBe('sumayabile8@gmail.com');

});

test('test if we can get the name from the getName()method',() => {
      expect(testEmployee.getName()).toBe('sumaya');

});

test('test if we can get the id from the getId()method',() => {
      expect(testEmployee.getId()).toBe('07878');

});

test('test if we can get the email from the getEmail()method',() => {
      expect(testEmployee.getEmail()).toBe('sumayabile8@gmail.com');

});

test('test if we can get the role from the getName()method',() => {
      expect(testEmployee.getRole()).toBe('Employee');

});
