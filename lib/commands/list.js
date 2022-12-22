const fs = require('fs');
const path = require('path');
const { printReadingList } = require('../utilities')

const list = () => {
    //list command will parse readingList.json file call printReadingList
    fs.readFile(path.join(__dirname, '..', "data", 'readingList.json'), 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const parsedData = JSON.parse(data);
        //parsed data is formatted and printed for usability
        printReadingList(parsedData)
    })

}

module.exports = list;