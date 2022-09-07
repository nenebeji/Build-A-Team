const fs = require('fs');
const inquirer = require('inquirer');
const generatepage = require('./src/pagetemplate');

//lib folder
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Array to push answers 
const StaffData = [];

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

// Function to Initialize app
function init() {
    const firstprompt = async () => {
    const data = await inquirer.prompt(questions)
    // console.log(data);
    if(data.role === 'Engineer') {
        // Engineer Question
        const EngQs = await inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Engineer's GitHub username?`,
                name: 'github',
                validate: githubinput => {
                    if (githubinput) return true;
                    else 
                    {console.log(`Please enter the engineer's github username`)
                    return false;
                  }
                },
            },
          
        ])
        const newEngineer = new Engineer (data.name, data.ID, data.email, EngQs.github);
        StaffData.push(newEngineer);
    }

    else if(data.role === 'Intern') {
        // Intern Question
        const IntQs = await inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the name of the Intern's school?`,
                name: 'school',
                validate: schoolinput => {
                  if (schoolinput) return true;
                  else 
                  {console.log(`Please provide the intern's school`)
                   return false;
                  }
                },
            },
          
        ])
        const newIntern = new Intern (data.name, data.ID, data.email, IntQs.school);
        StaffData.push(newIntern);
    }
    else if(data.role === 'Manager') {
        // Manager Questions
        const ManQs = await inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the team Manager's office number?`,
                name: 'officeNumber',
                validate: officeNumberinput => {
                  if (officeNumberinput) return true;
                  else 
                  {console.log(`Please enter the team manager's office number`)
                   return false;
                  }
                },
              },
          
        ])
        const newManager = new Manager (data.name, data.ID, data.email, ManQs.officeNumber);
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
    if (addTeamMembers.addmember === 'Yes! add another member') {return ResetQs();}

    return BuildTeam();
}
ResetQs();

const BuildTeam = () => {
    const htmlpage = generatepage(StaffData);

    // Write html file
    fs.writeFile ('./dist/index.html', htmlpage, (err) =>
    err ? console.error(err) : console.log('Hurray! You have successfully created a the DREAM TEAM!'));
    };
}

// Call function to initialize app
init();