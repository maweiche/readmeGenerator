const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");



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
console.log(questions);

//Write to file function
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}