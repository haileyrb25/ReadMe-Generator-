// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [   {
    
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
    name: 'installation',
    message: 'What is the installation process of your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for this project?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },
  {
      type: 'input',
      name: 'license',
      message: 'What kind of license does your project have?',
  },
  {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },];


// TODO: Create a function to write README file. need to return it
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app. need to initialize it 
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", generateMarkdown(answers))
        console.log("You have succesfully created a ReadMe File!")
    })
    
}

// Function call to initialize app
init();
