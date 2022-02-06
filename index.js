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

    ]);
};


// function to write README file using file system fs
const writeFile = data => {
    fs.writeFile('README.md', data, err => {


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