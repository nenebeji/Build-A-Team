# Build A Team
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Project Description](#project-description)

- [Installation](#installation)

- [Screenshots](#screenshots)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#test)

- [Questions](#questions)

- [References](#references)

 - [Walkthrough Video](#walkthrough-video)

- [License](#license)

## Project Description

This is a Node.Js command-line application that takes in information about employees in a team and generates a HTML webpage with a summary of this information. It also unit tests for every part of the code.

* A user is prompted with questions about the manager's name, id, email and officeNumber.

* Then the user is prompted to select an additional team member (an Engineer or an Intern or build the team).

* When a user selects Engineer then they are prompted to provide the Engineer's name, id, email and Github username.

* When a user selects Intern then they are prompted to provide the Intern's name, id, email and University name.

* When a user selects Buid a team option then the HTML webpage a generated with basic information of the team members and it is saved in the dist folder.

* A user can click on the github username on the webpage to open a new tab containing the github profile.

* A user can also click on the email address on the webpage and the default email program opens and populates the TO field of the email with the address.


## Installation

Run  $ npm install  to install inquirer and jest.

## Screenshots

![App Image](/assets/images/Applicationprompts.png)

![Webpage Image](/assets/images/TeamWebpage.png)

## Usage 

Run $ node index.js and follow the instructions.

## How to Contribute

1. Clone the repo using $ git clone git@github.com:nenebeji/Build-A-Team

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review

## Tests

Tests were run using npm test.

## Questions

Feel free to contact me for further questions via:

Github: https://github.com/nenebeji

Email: nenebeji@gmail.com

## References

https://github.com/nenebeji/Build-A-Team

### Walkthrough Video

https://drive.google.com/file/d/1BT8z1mEnRm6Zc2BYJBFiq5cR0VHRABCS/view?usp=sharing

## License

The MIT License

  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For more informaation you can click the link below:

https://opensource.org/licenses/MIT

Copyright (c) 2022 Oritsegidenene Beji.