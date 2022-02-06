//required modules
const fs = require('fs');
const inquirer = require('inquirer');

//readme.md
const generateREADME = require('./template.js');


//question
const getData = () => {
    return inquirer.prompt([



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