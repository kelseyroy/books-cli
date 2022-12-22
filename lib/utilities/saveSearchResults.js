const fs = require('fs');
const path = require("path");


const saveAndOverwriteSearch = (data) => {
    //write new search result data into lastSearch.json
    fs.writeFile(path.join(__dirname, '..', "data", 'lastSearch.json'), JSON.stringify(data, null, 2), (error) => {
        if (error) {
            //alert user if error occurred
            console.log('An error has occurred while saving your search results', error);
            return;
        }
        //inform user of successful completion of task
        console.log('Most recent search data successfully saved');
    });
}

module.exports = saveAndOverwriteSearch;