// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// go get the tool(function) that i created in another files
// to gen markdown
const genMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, usersAnswers) {
    // convert the obj of user answers into md
    let markdown = genMd(usersAnswers);

    // use that string (markdown) to pass to writefile
    fs.writeFile(fileName, markdown, function () {
        console.log('file creation completed');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'username',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[1],
                default: "example@example.com"
            },
            {
                type: 'input',
                name: 'project',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[3],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: ['MIT', 'GNU', 'Apache', 'Unlicense']
            },
            {
                type: 'input',
                name: 'install',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'contribution',
                message: questions[8],
            },
        ])
        .then(function (answers) {
            console.log(answers)

            writeToFile("sample.md", answers);
        })


}

// Function call to initialize app
init();
