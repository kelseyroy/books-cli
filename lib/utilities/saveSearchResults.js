const fs = require('fs');
// const file = require('../data/lastSearch.json')
const path = require("path");

// const file = fs.readFileSync();

const saveAndOverwriteSearch = (data) => {
    // const parsedData = JSON.parse(data);
    // console.log("DATA", JSON.stringify(data));
    // let jsonObj = JSON.stringify(data)
    fs.writeFile(path.join(__dirname, '..', "data", 'lastSearch.json'), JSON.stringify(data, null, 2), (error) => {
        if (error) {
            console.log('An error has occurred ', error);
            return;
        }
        console.log('Data written successfully to disk');
    });
}

module.exports = saveAndOverwriteSearch;