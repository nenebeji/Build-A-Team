const fs = require('fs');
const inquirer = require('inquirer');
const pagetemplate = require('./src/pagetemplate');

// Questions for user input

const questions = [ 
    {
    type: 'input',
    message: `What is the team Manager's name?`,
    name: 'managerName',
    // default: '',
    validate: managerNameinput => {
      if (managerNameinput) return true;
      else 
      {console.log(`Please enter the team manager's name`)
       return false;
      }
    },
  },
  {
    type: 'input',
    message: `What is the team Manager's Employee ID?`,
    name: 'managerID',
    // default: '',
    validate: managerIDinput => {
      if (managerIDinput) return true;
      else 
      {console.log(`Please enter the team manager's Employee ID`)
       return false;
      }
    },
  },
  {
    type: 'input',
    message: `What is the team Manager's email address`,
    name: 'managerEmail',
    // default: '',
    validate: managerEmailinput => {
      if (managerEmailinput) return true;
      else 
      {console.log(`Please enter the team manager's email address`)
       return false;
      }
    },
  },
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
  {
    type: 'list',
    message: `Please select an employee to complete your team`,
    name: 'role',
    choices: [
        'Engineer',
        'Intern',
        'None'
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
            message: `What is the Engineer's name?`,
            name: 'engineerName',
            // default: '',
            validate: engineerNameinput => {
              if (engineerNameinput) return true;
              else 
              {console.log(`Please enter the engineer's name`)
               return false;
              }
            },
        },
        {
            type: 'input',
            message: `What is the Engineer's ID?`,
            name: 'engineerID',
            // default: '',
            validate: engineerIDinput => {
              if (engineerIDinput) return true;
              else 
              {console.log(`Please enter the engineer's ID`)
               return false;
              }
            },
        },
        {
            type: 'input',
            message: `What is the Engineer's email address?`,
            name: 'engineerEmail',
            // default: '',
            validate: engineerEmailinput => {
              if (engineerEmailinput) return true;
              else 
              {console.log(`Please enter the engineer's email address`)
               return false;
              }
            },
        },
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
            message: `What is the Intern's name?`,
            name: 'internName',
            // default: '',
            validate: internNameinput => {
              if (internNameinput) return true;
              else 
              {console.log(`Please enter the intern's name`)
               return false;
              }
            },
        },
        {
            type: 'input',
            message: `What is the Intern's ID?`,
            name: 'internID',
            // default: '',
            validate: internIDinput => {
              if (internIDinput) return true;
              else 
              {console.log(`Please enter the Intern's ID`)
               return false;
              }
            },
        },
        {
            type: 'input',
            message: `What is the Intern's email address?`,
            name: 'internEmail',
            // default: '',
            validate: internEmailinput => {
              if (internEmailinput) return true;
              else 
              {console.log(`Please enter the intern's email address`)
               return false;
              }
            },
        },
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

// Function to Initialize app
function init() {inquirer.prompt(questions)
.then((data)=> {
    if(data.role === 'Engineer') {
        EngQs();
        inquirer.prompt(questions[5]);
    }
    if(data.role === 'Intern') {
        IntQs();
        inquirer.prompt(questions[5]);
    }

    else if(data.role === 'None') {
        return data;
    }
})
}

// Call function to initialize app
init();