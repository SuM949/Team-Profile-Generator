 const inquirer = require('inquirer');
 const Manager = require('./Manager');
 const Engineer = require('./Engineer');
 const Intern = require('./Intern');
 const generateSite = require('./src/generate-site.js');
 const fs = require("fs");
 const path = require("path");
const Manager = require('./Manager');
 const OUTPUT_DIR = path.resolve(__dirname, "output")
 const outputPath = path.join(OUTPUT_DIR, "team.html");
 const teamMembers = [];

 const promptManager = () => {
     return inquirer.prompt([
             {
           type:'input',
           name:'name',
           message:'what is your name? (Required',
           validate: nameInput => {
               if (nameInput){
                   return true;
               }else {
                   console.log('Please enter your name!');
                   return false;
               }
           }
         }

         
     ])
  };


  {
    type:'input',
    name:'employeeId',
    message:'Enter your employee ID (Required',
    validate: employeeId => {
        if(employeeId) {
            return true;
        }else{
            console.log('Please enter your employee ID!');
            return false;
        }
    }
};
    {
    type:'input',
    name:'email',
    message:'Enter your email address (Required',
    validate: email => {
        if(email) {
            return true;
        }else{
            console.log('Please enter your email address!');
            return false;
        }
    }
};

{
    type:'input',
    name:'officeNumber',
    message:'Enter your office number (Required',
    validate: officeNumber => {
        if(officeNumber) {
            return true;
        }else{
            console.log('Please enter your office number!');
            return false;
        }
    }
};

then(answers => {
    console.log(answers);
    const Manager = new Manager(answers.name, answers.employeeId, answers.email,answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();


})
