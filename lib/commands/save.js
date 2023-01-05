// const lastSearchJson = require('../data/lastSearch.json');
// const readingList = require('../data/readingList.json')
import {saveReadingList, prompter, formatSave, fetchLastSearch} from '../utilities/index.js'
// const { saveReadingList, prompter, formatSave } = require('../utilities')
import fs from 'fs';
import * as path from 'path'

export const save = async () => {
    try {
        // let lastSearch = fetchLastSearch();
        const lastSearchJson = new URL('../data/lastSearch.json', import.meta.url);
        let lastSearch = fs.readFileSync(lastSearchJson, {encoding:'utf8', flag:'r'})
        console.log(lastSearch)
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

// module.exports = save;