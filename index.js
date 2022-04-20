// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [   {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?', 
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    
  },

  {
    type: 'input',
    name: 'description',
    message: 'Please write a description of your project:',
  },
  {
      type: 'input',
      name: 'license',
      message: 'What kind of license does your project have?',
  },
//   {
//       type: '',
//       name: '',
//       message: 'What languages were used in this project?',
//     },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
    },];
//insert questions

// TODO: Create a function to write README file. need to return it
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app. need to initialize it 
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
