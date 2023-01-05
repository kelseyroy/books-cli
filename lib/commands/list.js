// const { printReadingList } = require('../utilities')
import {printReadingList} from '../utilities/index.js'
import fs from 'fs';
import * as path from 'path'


export const list = () => {
    // const fs = require('fs');
    // const path = require('path');
    //list command will parse readingList.json file call printReadingList
    const readingListJson = new URL('../data/readingList.json', import.meta.url);
    fs.readFile(readingListJson, 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const parsedData = JSON.parse(data);
        //parsed data is formatted and printed for usability
        printReadingList(parsedData)
    })

}

// module.exports = list;