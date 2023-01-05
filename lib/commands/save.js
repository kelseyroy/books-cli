const lastSearch = require('../data/lastSearch.json');
const readingList = require('../data/readingList.json')
const { saveReadingList, prompter, formatSave } = require('../utilities')

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

            let bookToSave = prompter({values: books}, formatSave)

            console.log(bookToSave)
            // saveReadingList([...readingList, ...bookToSave]);
        }
    } catch (error) {
        console.error(`Whoops! An error occured while saving your books. ${error}`)
    }

}

module.exports = save;