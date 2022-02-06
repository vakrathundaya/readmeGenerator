//required modules
const fs = require('fs');
const inquirer = require('inquirer');

//readme.md
const generateREADME = require('./template.js');


//question
const getData = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'what is your project?'

        },
        {
            type: 'input',
            name: 'description',
            message: 'please write a description of your project'

        },
        {

            type: 'list',
            name: 'license',
            message: 'what kind of license your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', '""']

        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?'
        },

        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?'
        },

        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?'
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'what does the user need to know about contributing to the repo?'

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]);
};


// function to write README file using file system fs
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }

    })
}

//initialize program

getData()
    .then(data => {
        return generateREADME(data);

    })
    .then(data => {
        return writeFile(data);
    })  