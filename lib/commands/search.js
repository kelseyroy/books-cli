// import { fetchBooks } from '../utilities/fetchBooks';
const inquirer = require('inquirer');
const { formatUrl, fetchBooks } = require('../utilities')

const search = async () => {
    try {
        let answers = await inquirer.prompt([
            {
                message: "Keyword:",
                type: "string",
                name: 'keyword',
            }, {
                message: "Title:",
                type: "string",
                name: 'title',
            }, {
                message: "Author:",
                type: "string",
                name: 'author',
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
        console.info(answers)

        let filtered = Object.values(answers).filter(n => n);
        if (!filtered.length) {
            throw new Error('At least one search term must have inputs.')
        } else {
            let url = formatUrl(answers);
            fetchBooks(url)
        }
    } catch (error) {
        console.error(error)
    }

}

module.exports = search;