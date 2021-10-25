# Project Title

The goal of this project was to build a node.js application that generates a README.md file for the user, populated with their responeses regarding their repository.  Once the user iniatilizes the application and completes the questions, the README.md file will then be created in the output directory.
* [See Live Video](https://watch.screencastify.com/v/9EzE45V0IxU67FcnkfsQ)
![Demo gif](./assets/demo.gif)

### User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

### Prerequisites

`node.js`


### Installing

`npm init`
`npm install inquirer`

### Usage
Open your terminal and locate file, then run
`node index.js`



## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://maweiche.github.io/readmeGenerator/)


## Authors

* **Matthew Weichel** 
- [Link to Github](https://github.com/maweiche)



## License

This project is licensed under the MIT License 

## Acknowledgments

* Hat tip to anyone whose code, libraries, packages, or UI was used  / inspired from
