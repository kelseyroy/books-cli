const lastSearch = require('../data/lastSearch.json');
const readingList = require('../data/readingList.json')
const inquirer = require('inquirer');
const { saveReadingList } = require('../utilities')

const save = async () => {
    try {
        if (!lastSearch.length) {
            //if there is no saved search data in lastSearch.json, prompt user to search first
            console.log(`You haven't searched for a book yet! Search for books to save with the command:\nbooks-cli search`);
        } else {
            //format the search data from lastSearch.json to improve readability
            let books = lastSearch.map((book) => {
                let prompt = `${book.id}: ${book.title} written by ${book.authors}`
                return prompt;
            })

            //call inquirer CLI and prompt users to select which books they want to save
            let answers = await inquirer.prompt([
                {
                    message: 'Which books would you like to save?',
                    name: 'books',
                    type: 'checkbox',
                    choices: books
                }
            ]);
            if (!answers.books.length) {
                //if user did not make a selection, provide directions
                console.log('At least one book must be selected.')
            } else {
                //return book id's from prompt
                let ids = answers.books.map((book) => {
                    let arr = book.split(':')
                    return arr[0]
                })
                //filter which books to save using book id's
                let booksToSave = lastSearch.filter(({ id }) => {
                    return ids.includes(id)
                })

                //append previous reading list with new books and write new array into readingList.json 
                saveReadingList([...readingList, ...booksToSave]);
            }
        }
    } catch (error) {
        console.error(`Whoops! An error occured while saving your books. ${error}`)
    }

}

module.exports = save;