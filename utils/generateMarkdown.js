// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `##License
    This project is licensed under ${license}.`
  } else {
    return `##License
    This project is not licensed.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
 
---
## Table of Contents

- [Description](#Desription)
- [Installation](#Installations)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Test Instructions](#Tests)
- [Questions](#Questions)
- [License](#License)

---
## Description
${data.description}

---
## Installations

*Installation Process:* ${data.installation}

---
## Usage

*Usage Information:* ${data.usage}

---
## Contributions

*Contribution Guidelines:* ${data.contribution}

---
## Tests

*Test Instructions:* ${data.test}

---
## Questions

*Github Username:* ${data.github}

*To reach me with more questions, please email me at:* ${data.email}

---
## Licenses

${renderLicenseSection(data.liscense)}
${renderLicenseBadge(data.liscense)}

`;
}

module.exports = generateMarkdown;
