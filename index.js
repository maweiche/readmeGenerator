const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const markdown = require("./generateMarkdown") //seperate file to create README template


//Initialize function
function init() {

//Question array
 inquirer.prompt([
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
        message: "Choose a license used for your project.", 
        name: "license",
        choices: ["GNU", "MIT", "Apache", "WTFPL"],
    },
    {
        type: "input",
        message: "What is your GitHub username",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
])
.then((response)=>{
    return fs.writeFileSync(path.join(process.cwd(), "README.md"), markdown(response));
});
}

init();

