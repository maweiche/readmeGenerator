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
        message: "Enter a description of your Project.",
        name: "description",
    },
    {
        type: "input",
        message: "Enter any installation instructions.",
        name: "install",
    },
    {
        type: "input",
        message: "What is this Project used for",
        name: "usage",
    },
    {
        type: "input",
        message: "List any contributors on your project.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Include any instructions for testing your Project.",
        name: "test",
    },
    {
        type: "list",
        message: "Choose the appropriate license for your project.", 
        name: "license",
        choices: ["GNU", "MIT", "Apache", "WTFPL", "Academic", "Mozilla", "Open"],
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
    console.log("Your README was created successfully!");
    return fs.writeFileSync(path.join(process.cwd(), "./output/README.md"), markdown(response))
    
});

}

init();

