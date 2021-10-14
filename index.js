const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const markdown = require("./generateMarkdown") //seperate file to create README template



//Question array
const questions = [
    {
        type: "input",
        message: "What is your Project's Title?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a Project description.",
        name: "description",
    },
    {
        type: "input",
        message: "Enter any installation instructions.",
        name: "install",
    },
    {
        type: "input",
        message: "Enter any usage information.",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter any contribution guidelines.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Enter any test instructions.",
        name: "test",
    },
    {
        type: "list",
        message: "Choose a license for your application.", 
        name: "license",
        choices: ["GNU", "MIT", "PDDL", "WTFPL"],
    },

];

//Write to file function
function writeToFile(fileName, answers) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), answers)
}


//Initialize function
function init() {
    inquirer.prompt(questions)
    .then (answers => {
        writeToFile("README.md",markdown(answers))
    })
}

init();

