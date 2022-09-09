const fs = require('fs');
const inquirer = require('inquirer');
const generateHTMLpage = require('./src/pagetemplate');

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
    message: `What is the Team Manager's name?`,
    name: 'name',
    // default: '',
    validate: nameinput => {
      if (nameinput) return true;
      else 
      {console.log(`Please enter the Team managers's name`)
       return false;
      }
    },
  },
  {
    type: 'input',
    message: `What is the Team Manager's ID?`,
    name: 'ID',
    // default: '',
    validate: IDinput => {
      if (IDinput) return true;
      else 
      {console.log(`Please enter the Team Manager's ID`)
       return false;
      }
    },
  },
  {
    type: 'input',
    message: `What is the Team Manager's email address`,
    name: 'email',
    // default: '',
    validate: emailinput => {
      if (emailinput) return true;
      else 
      {console.log(`Please enter the Team Manager's email address`)
       return false;
      }
    },
  },
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
];

// function for Engineer Questions
const EngQs = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the Engineer's name?`,
            name: 'name',
            // default: '',
            validate: nameinput => {
              if (nameinput) return true;
              else 
              {console.log(`Please enter the Engineer's name`)
               return false;
              }
            },
          },
          {
            type: 'input',
            message: `What is the Engineer's ID?`,
            name: 'ID',
            // default: '',
            validate: IDinput => {
              if (IDinput) return true;
              else 
              {console.log(`Please enter the Engineer's ID`)
               return false;
              }
            },
          },
          {
            type: 'input',
            message: `What is the Engineer's email address`,
            name: 'email',
            // default: '',
            validate: emailinput => {
              if (emailinput) return true;
              else 
              {console.log(`Please enter the Engineer's email address`)
               return false;
              }
            },
          },
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
    .then((data) => {
        // const {name, ID, email, github, extramember} = data;
        const engineer = new Engineer (data.name, data.ID, data.email, data.github);

        StaffData.push(engineer);

        addStaff()
    })
}

// Function for Intern Questions
const IntQs = () => {
    // Intern Question
    return inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the Intern's name?`,
            name: 'name',
            // default: '',
            validate: nameinput => {
              if (nameinput) return true;
              else 
              {console.log(`Please enter the Intern's name`)
               return false;
              }
            },
          },
          {
            type: 'input',
            message: `What is the Intern's ID?`,
            name: 'ID',
            // default: '',
            validate: IDinput => {
              if (IDinput) return true;
              else 
              {console.log(`Please enter the Intern's ID`)
               return false;
              }
            },
          },
          {
            type: 'input',
            message: `What is the Intern's email address`,
            name: 'email',
            // default: '',
            validate: emailinput => {
              if (emailinput) return true;
              else 
              {console.log(`Please enter the Intern's email address`)
               return false;
              }
            },
          },
        {
            type: 'input',
            message: `What is the name of the Intern's University?`,
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
    .then((data) => {
        // const {name, ID, email, school, extramember} = data;
        const intern = new Intern (data.name, data.ID, data.email, data.school);

        StaffData.push(intern);

        addStaff()
    })
}

// function to prompt the user to add staff
const addStaff = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: `Would you like to add another Team member?`,
            name: 'extramember',
            choices: [
                'Engineer',
                'Intern',
                'No! Build the A team'
            ],
            // default: '',
            validate: extramemberinput => {
              if (extramemberinput) return true;
              else 
              {console.log(`Please make a selection`)
               return false;
              }
            },
          },
    ])
    .then((choice) => {
        switch (choice.extramember) {
            case 'Engineer':
                EngQs();
                break;
            case 'Intern':
                IntQs();
                break;
            default: BuildTeam();
        }
    });
}

// function for prompts
const prompts = () => {
    return inquirer.prompt(questions)
    .then((data) => {
        // const {name, ID, email, officeNumber} = data;
        const manager = new Manager (data.name, data.ID, data.email, data.officeNumber);
        // console.log(manager.getName());
        StaffData.push(manager);
        addStaff();
    })
}

// Function to Initialize app
function init() {
 prompts();
}



const BuildTeam = () => {
    const htmlpage = generateHTMLpage(StaffData);
    // Write html file
    fs.writeFile ('./dist/index.html', htmlpage, (err) =>
    err ? console.error(err) : console.log('Hurray! You have successfully created a the DREAM TEAM! Please Check the dist folder.'));
    };


// Call function to initialize app
init()
