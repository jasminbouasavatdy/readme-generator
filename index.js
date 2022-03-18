// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What would you like your title for this project to be?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should you run to install dependencies?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please provide instructions for use and examples for the user:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide any contributors for this project:',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests? ',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your email? ',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: [
            { name: 'GNU', value: 'GNU' },
            { name: 'MPL', value: 'MPL' },
            { name: 'Apache', value: 'APACHE' },
            { name: 'MIT', value: 'MIT' },

        ]
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'preferredCommunication',
        choices: [
            { name: 'Email', value: 'email' },
            { name: 'In-Person', value: 'in-person' },
        ]
    },
])

// TODO: Create a function to write README file
.then(answers => {
   var template =  generateMarkdown(answers) 

// function writeToFile(fileName, data) { }

fs.writeFile('./dist/README.md',template, (err)=> { err? console.error(err): console.log(answers);
})
});
// TODO: Create a function to initialize app
function init() {
 }
// Function call to initialize app
init();
