import fs from 'fs';
import { saveReadingList } from './saveReadingList.js';

export const formatSave = (data) => {
    const lastSearchJson = new URL('../data/lastSearch.json', import.meta.url);
    let searchData = fs.readFileSync(lastSearchJson, { encoding: 'utf8', flag: 'r' })
    let lastSearch = JSON.parse(searchData)

    const readingListJson = new URL('../data/readingList.json', import.meta.url);
    let listData = fs.readFileSync(readingListJson, { encoding: 'utf8', flag: 'r' })
    let readingList = JSON.parse(listData)

    if (!data.value.length) {
        //if user did not make a selection, provide directions
        console.log('At least one book must be selected.')
    } else {
        //return book id's from prompt
        let selectedId = data.value.split(':')[0];
        let bookToSave = lastSearch.filter(({ id }) => {
            return id === selectedId;
        })
        
        saveReadingList([...readingList, ...bookToSave]);
    }
}
