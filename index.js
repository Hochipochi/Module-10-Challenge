const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');
const Employee = require('./lib/Employee');

const teamMembersHTML = [];

// Inform user of usage
console.log(
  '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

function appMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'What kind of Employee do you want to Create?',
        choices: ['Intern', 'Manager', 'Engineer', 'Exit']
      }
    ]) 
    //evaluate response
    .then((response) => {
      if (response.employeeType === 'Intern') {
        inquirer
          .prompt([
          {
          type: 'input',
          name: 'employeeName',
          message: 'What is the name of the employee?'
          }
      ]) 
      .then((response) => {
        const brandNewIntern = new Intern(response.employeeName)
        //create html for intern
        const html = brandNewIntern.makeHtml()

        // add html for this intern to array teamMembersHTML
        teamMembersHTML.push(html)
      }
    )} else if (response.employeeType === 'Manager') {
      inquirer
      .prompt([
      {
      type: 'input',
      name: 'employeeName',
      message: 'What is the name of the employee?'
      }
    ]) 
    .then((response) => {
      const brandNewManager = new Manager(response.employeeName)
      //create html for intern
      const html = brandNewManager.makeHtml()

      // add html for this intern to array teamMembersHTML
      teamMembersHTML.push(html)
    }
    )} else if (response.employeeType === 'Engineer') {
      inquirer
      .prompt([
      {
      type: 'input',
      name: 'employeeName',
      message: 'What is the name of the employee?'
      }
  ]) 
    .then((response) => {
      const brandNewEngineer = new Engineer(response.employeeName)
      //create html for intern
      const html = brandNewEngineer.makeHtml()

      // add html for this intern to array teamMembersHTML
      teamMembersHTML.push(html)
})
}})}

// function appMenu() {
//   function createManager() {
//     console.log('Please build your team 👥');
//     inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'managerName',
//           message: "What is the team manager's name?",
//           validate: (answer) => {
//             if (answer !== '') {
//               return true;
//             }
//             return 'Please enter at least one character.';
//           },
//         },
//         {
//           type: 'input',
//           name: 'managerId',
//           message: "What is the team manager's id?",
//           validate: (answer) => {
//             const pass = answer.match(/^[1-9]\d*$/);
//             if (pass) {
//               return true;
//             }
//             return 'Please enter a positive number greater than zero.';
//           },
//         },
//         {
//           type: 'input',
//           name: 'managerEmail',
//           message: "What is the team manager's email?",
//           validate: (answer) => {
//             const pass = answer.match(/\S+@\S+\.\S+/);
//             if (pass) {
//               return true;
//             }
//             return 'Please enter a valid email address.';
//           },
//         },
//         {
//           type: 'input',
//           name: 'managerOfficeNumber',
//           message: "What is the team manager's office number?",
//           validate: (answer) => {
//             const pass = answer.match(/^[1-9]\d*$/);
//             if (pass) {
//               return true;
//             }
//             return 'Please enter a positive number greater than zero.';
//           },
//         },
//       ])
//       .then((answers) => {
//         const manager = new Manager(
//           answers.managerName,
//           answers.managerId,
//           answers.managerEmail,
//           answers.managerOfficeNumber
//         );
//         teamMembers.push(manager);
//         idArray.push(answers.managerId);
//         createTeam();
//       });
//   }

  // function createTeam() {
  //   //code goes here
  // }

  // function addEngineer() {
  //   //code goes here
  // }

  // function addIntern() {
  //   //code goes here
  // }

  // function buildTeam() {
  //   // Create the output directory if the dist path doesn't exist
  //   if (!fs.existsSync(DIST_DIR)) {
  //     fs.mkdirSync(DIST_DIR);
  //   }
  //   fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  // }

  // createManager();
// }

appMenu();