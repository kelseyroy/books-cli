// const lastSearch = require('../data/lastSearch.json');
// const readingList = require('../data/readingList.json')
// import {fetchLastSearch} from "./fetchLastSearch.js";
// import lastSearch from '../data/lastSearch.json' assert { type: 'JSON' };
import fs from 'fs';
import * as path from 'path'

export const formatSave = (data) => {
    const lastSearchJson = new URL('../data/lastSearch.json', import.meta.url);
    let lastSearch = fs.readFileSync(lastSearchJson, {encoding:'utf8', flag:'r'})
    // let lastSearch = fetchLastSearch();
    if (!data.length) {
        //if user did not make a selection, provide directions
        console.log('At least one book must be selected.')
    } else {
        //return book id's from prompt
        let dataArr = data.value.split(':');
        let bookToSave = lastSearch.filter(({ id }) => {
            return dataArr[0].include(id);
        })

        return bookToSave;
        // let ids = data.value.map((book) => {
        //     let arr = book.split(':')
        //     return arr[0]
        // })
        //filter which books to save using book id's
        // let booksToSave = lastSearch.filter(({ id }) => {
        //     return ids.includes(id)
        // })

        //append previous reading list with new books and write new array into readingList.json 

    }
}

// module.exports = formatSave;