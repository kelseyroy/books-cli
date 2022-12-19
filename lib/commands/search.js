// import { fetchBooks } from '../utilities/fetchBooks';
const inquirer = require('inquirer');
const { formatUrl, fetchBooks, printSearchResults } = require('../utilities')

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

        let filtered = Object.values(answers).filter(n => n);
        if (!filtered.length) {
            throw new Error('At least one search term must have inputs.')
        } else {
            let url = formatUrl(answers);
            let useFetchBooks = await fetchBooks(url);
            if (useFetchBooks.totalItems === 0) {
                throw new Error (`Sorry, there were no books that matched your search terms. Please check your spelling and try again!`)
            } else {
                printSearchResults(useFetchBooks.items);
                return useFetchBooks.items
            }
        }
    } catch (error) {
        console.error(error)
    }

}

module.exports = search;