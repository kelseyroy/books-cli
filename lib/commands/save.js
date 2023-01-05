import { prompter, formatSave } from '../utilities/index.js'
import fs from 'fs';

export const save = async () => {
    try {
        const lastSearchJson = new URL('../data/lastSearch.json', import.meta.url);
        let data = fs.readFileSync(lastSearchJson, { encoding: 'utf8', flag: 'r' })
        let lastSearch = JSON.parse(data)

        if (!lastSearch.length) {
            //if there is no saved search data in lastSearch.json, prompt user to search first
            console.log(`You haven't searched for a book yet! Search for books to save with the command:\nbooks-cli search`);
        } else {
            //format the search data from lastSearch.json to improve readability
            let books = lastSearch.map((book) => {
                let prompt = `${book.id}: ${book.title} written by ${book.authors}`
                return prompt;
            })
            
            prompter({ values: books }, formatSave)

            
        }
    } catch (error) {
        console.error(`\n Whoops! An error occured while saving your books. ${error}`)
    }

}