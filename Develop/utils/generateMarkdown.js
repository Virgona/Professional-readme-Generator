// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

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
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${data.license}
  
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
  
  ## License
  
  ${renderLicenseLink(data)}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions

  Any Q's? - Checkout my GitHub below or drop me an email!

  - GitHub: https://github.com/${data.username}
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
