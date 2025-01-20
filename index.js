// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
},
{
    type: 'input',
    name: 'contributing',
    message: 'List the contribution guidelines:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) =>
      err ? console.error(err) : console.log('README.md has been created!')
    );}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      writeToFile('README.md', responses);
    });
  }

// Function call to initialize app
init();

