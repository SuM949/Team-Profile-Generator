const Engineer = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        // call parent constructor here:
        super(name, id, email);

        this.githubUsername = githubUsername;
    }
     getSchool() {
         return this.githubUsername;
     }

    getRole(){
        return "Engineer";
    }


}
module.exports = Engineer;