const Employee = require(Employee);

class Manager extends Employee {
    constructor(name, id, email) {
        // call parent constructor here:
        super(name, id, email);

        this.officeNumber() 
    }
  
     getOfficeNumber(){
         return this.officeNumber;
     }
  
    getRole(){
        return"Manager";
    }
}
 module.exports = Manager;