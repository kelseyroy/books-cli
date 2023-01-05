import {printReadingList} from '../utilities/index.js'
import fs from 'fs';
import * as path from 'path'


export const list = () => {

    const readingListJson = new URL('../data/readingList.json', import.meta.url);
    fs.readFile(readingListJson, 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const parsedData = JSON.parse(data);
        printReadingList(parsedData)
    })

}
