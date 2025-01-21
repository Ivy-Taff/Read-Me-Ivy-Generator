export default function generateMarkdown(data) {
  function renderLicenseBadge(license) {
    if (!license) return '';
    return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
  }

  function renderLicenseLink(license) {
    if (!license) return '';
    return `\n- [License](#license)\n`;
  }

  function renderLicenseSection(license) {
    if (!license) return '';
    return `## License

This project is licensed under the **${license}** license.`;
  }

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}
