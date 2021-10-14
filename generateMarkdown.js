function generateMarkdown(data) {
return `
# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)</br>

## Table of Contents
1. [Description](#Description)
2. [Installation](#Install)
3. [Usage](#Usage)
4. [Contributing](#Contribution)
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

## Contribution
${data.contribution}

## Tests
${data.test}

## License
${data.license}

## Github
${data.github}

## E-mail
${data.email}`
}

module.exports = generateMarkdown;