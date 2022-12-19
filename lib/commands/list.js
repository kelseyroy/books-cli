const fs = require('fs');
const path = require('path');
const { printReadingList } = require('../utilities')

const list = () => {
    fs.readFile(path.join(__dirname, '..', "data", 'readingList.json'), 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const parsedData = JSON.parse(data);
        // parsedData.createdAt = new Date().toISOString();
        printReadingList(parsedData)
    })

}

module.exports = list;