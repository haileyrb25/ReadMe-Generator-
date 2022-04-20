// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];
//insert questions
inquirer
  .prompt([
    {
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
    {
        type: '',
        name: '',
        message: 'What languages were used in this project?',
      },
      {
          type: 'input',
          name: 'contributors',
          message: 'Who contributed to this project?',
      },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
