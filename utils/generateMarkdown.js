const licenses = {
  MIT: "The MIT license gives users express permission to reuse code for any purpose",

  GNU: "The GNU General Public License is a free, copyleft license for software and other kinds of works",

  Apache: `The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). 
  It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties.`,

  Unlicense: `The Unlicense is a public domain equivalent license for software which provides a public domain waiver with a fall-back public-domain-like license, similar to the CC Zero for cultural works`
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const license = data.license

  if (license) {
    return `![License Badge](https://img.shields.io/badge/license-${license}-green.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  const userLicense = data.license
  if (userLicense) {
    return `https://choosealicense.com/licenses/${data.license}/`

  } else return ' '
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  const userLicense = data.license
  if (userLicense) {
    return `
    ## License
    - ${data.license}
    - ${renderLicenseLink(data)}
    - ${licenses[userLicense]}
    
    `
  } else return ' '

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions

  Any Q's? - Checkout my GitHub below or drop me an email!

  - GitHub: https://github.com/${data.username}
  - Email: ${data.email}

  ${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
