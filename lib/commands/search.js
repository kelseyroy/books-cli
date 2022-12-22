const inquirer = require('inquirer');
const { formatUrl, fetchBooks, printSearchResults } = require('../utilities')

const search = async () => {
    try {
        //call inquirer CLI and prompt users to enter search terms
        let answers = await inquirer.prompt([
            {
                message: "Keyword (press enter to submit or skip):",
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
        //filter answers object to ensure that the search terms aren't all empty
        let filtered = Object.values(answers).filter(n => n);
        if (!filtered.length) {
            //if user did not enter any search terms, provide directions
            console.log('At least one search term must have inputs.')
        } else {
            //format the url to return a quereyable string
            let url = formatUrl(answers);
            //make an axios call to google books api and return data
            let useFetchBooks = await fetchBooks(url);
            if (useFetchBooks.totalItems === 0) {
                //throw error if the search terms yielded no results.
                throw new Error (`Sorry, there were no books that matched your search terms. Please check your spelling and try again!`)
            } else {
                 //format api data and write data to lastSearch.json
                printSearchResults(useFetchBooks.items);
                return useFetchBooks.items
            }
        }
    } catch (error) {
        console.error(`Whoops! An error occured while searching for books. ${error}`)
    }

}

module.exports = search;