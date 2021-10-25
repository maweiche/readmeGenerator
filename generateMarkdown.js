function generateMarkdown(data) {
return `
# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)</br>

## Table of Contents
1. [Description](#Description)
2. [Installation](#Install)
3. [Usage](#Usage)
4. [Contributors](#Contribution)
5. [Tests](#Tests)
6. [License](#License)
7. [GitHub](#Github)
8. [E-mail](#E-mail)

## Description
${data.description}

## Install
${data.install}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br/>
This application is covereved by the ${data.license} license.

## Contribution
${data.contribution}

## Tests
${data.test}

## License
${data.license}

## Github
Link to my GitHub: [${data.github}](https://github.com/${data.github})<br/>

## E-mail
Feel free to email me with any questions: ${data.email}`
}

module.exports = generateMarkdown;