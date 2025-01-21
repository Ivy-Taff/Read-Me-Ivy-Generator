const inquirer = await import('inquirer');
const fs = await import('fs');
import generateMarkdown from './generateMarkdown.js';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Your description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install this project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the intended usage?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are your contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are your test instructions?',
  },

  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license will your project use?',
  },
];

async function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  try {
    await fs.promises.writeFile(fileName, content);
    console.log('README.md has been created!');
  } catch (err) {
    console.error(err);
  }
}

async function init() {
  try {
    const responses = await inquirer.default.prompt(questions);
    await writeToFile('README.md', responses);
  } catch (err) {
    console.error('Error during initialization:', err);
  }
}

init();

