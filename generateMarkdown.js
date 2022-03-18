// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if(license == 'gnu');
// return '![License Chosen](/images/GNU-License.png)'
switch(license){
  case 'GNU': return '![License Chosen](/images/GNU-License.png)';
  case 'MIT': return '![License Chosen](/images/MIT-License.png)';
  case 'APACHE': return '![License Chosen](/images/Apache-License.png)';
  case 'MPL': return '![License Chosen](/images/MPL-License.png)';
  default: return '';
}
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'GNU': return '[GNU](https://choosealicense.com/licenses/agpl-3.0/)';
    case 'MIT': return '![License Chosen](https://choosealicense.com/licenses/mit/)';
    case 'APACHE': return '![License Chosen](https://choosealicense.com/licenses/apache-2.0/)';
    case 'MPL': return '![License Chosen](https://choosealicense.com/licenses/mpl-2.0/)';
    default: return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  var license = renderLicenseBadge(answers.license);
  var licenseLink = renderLicenseLink(answers.license);
  var licenseSection =renderLicenseSection(answers.license)
  return license + `\n# ${answers.title}

  ## Table of contents
  1. [Description](#Description)
  1. [Installation](#Installation)
  1. [Usage](#Usage)
  1. [License](#License)
  1. [Contributors](#Contributors)
  1. [Tests](#Tests)
  1. [Questions](#Questions)
  1. [Contact](#Contact)
  
  ## Description
  ${answers.description}
  ## Installation
  ${answers.install}
  ## Usage
  ${answers.usage}
  ## License
  ${licenseLink}
  ## Contributors
  ${answers.contributers}
  ## Tests
  ${answers.test}
  ## Questions
  [Click to go to my GitHub](https://github.com/${answers.questions})
  ## Contact
  You can contact me by: ${answers.preferredCommunication}`
};
module.exports = generateMarkdown;
