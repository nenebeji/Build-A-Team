const fs = require('fs');
const inquirer = require('inquirer');
const pagetemplate = require('./src/pagetemplate');

//lib folder
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Questions for user input

const questions = [ 
    {
    type: 'input',
    message: `What is the Employee's name?`,
    name: 'name',
    // default: '',
    validate: nameinput => {
      if (nameinput) return true;
      else 
      {console.log(`Please enter the Employee's name`)
       return false;
      }
    },
  },
  {
    type: 'input',
    message: `What is the Employee's ID?`,
    name: 'ID',
    // default: '',
    validate: IDinput => {
      if (IDinput) return true;
      else 
      {console.log(`Please enter the Employee's ID`)
       return false;
      }
    },
  },
  {
    type: 'input',
    message: `What is the Employee's email address`,
    name: 'email',
    // default: '',
    validate: emailinput => {
      if (emailinput) return true;
      else 
      {console.log(`Please enter the employees's email address`)
       return false;
      }
    },
  },
  {
    type: 'list',
    message: `What is their role on the team?`,
    name: 'role',
    choices: [
        'Engineer',
        'Intern',
        'Manager'
    ],
    // default: '',
    validate: roleinput => {
      if (roleinput) return true;
      else 
      {console.log(`Please select the type of employee`)
       return false;
      }
    },
  },
];

// Engineer Questions function
const EngQs = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the Engineer's GitHub username?`,
            name: 'github',
            // default: '',
            validate: githubinput => {
              if (githubinput) return true;
              else 
              {console.log(`Please enter the engineer's github username`)
               return false;
              }
            },
        },
          
    ])
}

//Intern Questions function
const IntQs = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the name of the Intern's school?`,
            name: 'school',
            // default: '',
            validate: schoolinput => {
              if (schoolinput) return true;
              else 
              {console.log(`Please provide the intern's school`)
               return false;
              }
            },
        },
          
    ])
}

// Manager Question function
const ManQs = ()=> {
    inquirer.prompt([
  {
    type: 'input',
    message: `What is the team Manager's office number?`,
    name: 'officeNumber',
    // default: '',
    validate: officeNumberinput => {
      if (officeNumberinput) return true;
      else 
      {console.log(`Please enter the team manager's office number`)
       return false;
      }
    },
  },
          
    ])  
}

const StaffData = [];

// Function to Initialize app
function init() {
    const firstprompt = async () => {
    const data = await inquirer.prompt(questions)
    // console.log(data);
    if(data.role === 'Engineer') {
        EngQs();
        const newEngineer = new Engineer (data.name, data.ID, data.email, newEngineer.github);
        StaffData.push(newEngineer);
    }
    else if(data.role === 'Intern') {
        IntQs();
        const newIntern = new Intern (data.name, data.ID, data.email, newIntern.school);
        StaffData.push(newIntern);
    }
    else if(data.role === 'Manager') {
        ManQs();
        const newManager = new Manager (data.name, data.ID, data.email, newManager.officeNumber);
        StaffData.push(newManager);
    }
}
// firstprompt();

// To Reset Questions

const ResetQs = async () => {
    await firstprompt();
    const addTeamMembers = await inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add anymore Team members?',
            name: 'addmember',
            choices: [
                'Yes! add another member',
                'No! Create the A team'
            ],
        }
    ])
    if (addTeamMembers === 'Yes! add another member') return ResetQs();

    // return BuildTeam();
}
ResetQs();
}

// Call function to initialize app
init();