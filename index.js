const inquirer = require("inquirer");


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
    }

];
console.log(questions);