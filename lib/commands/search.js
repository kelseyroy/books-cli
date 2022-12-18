const inquirer = require('inquirer');

const search = async () => {
    let answers = await inquirer.prompt([
        {
            message: "Keyword:",
            type: "string",
            name: 'keyword',
        },
        {
            message: "Author:",
            type: "string",
            name: 'author',
        }, {
            message: "Title:",
            type: "string",
            name: 'title',
        }, {
            message: "Subject:",
            type: "string",
            name: 'subject',
        }, {
            message: "ISBN Number:",
            type: "string",
            name: 'isbn',
        }
    ])

    console.log("answers:", answers);
    
    // chooseSearchTerms;
}

module.exports = search;