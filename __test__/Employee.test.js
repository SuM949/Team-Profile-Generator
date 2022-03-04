const Employee = require('../lip/Employee');
const employee = new Employee('sumaya', '07878','sumayabile8@gmail.com');

test ('test if we can get the constructor values for the employee object', () =>{
       expect(employee.name).toBe('sumaya');
       expect(employee.id).toBe('07878');
       expect(employee.email).toBe('sumayabile8@gmail.com');

});

test('test if we can get the name from the getName()method',() => {
      expect(employee.getName()).toBe('sumaya');

});

test('test if we can get the id from the getId()method',() => {
      expect(employee.getId()).toBe('07878');

});

test('test if we can get the email from the getEmail()method',() => {
      expect(employee.getEmail()).toBe('sumayabile8@gmail.com');

});

test('test if we can get the role from the getName()method',() => {
      expect(employee.getRole()).toBe('Employee');

});
