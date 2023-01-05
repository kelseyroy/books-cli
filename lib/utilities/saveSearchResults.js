import fs from 'fs';
import * as path from 'path'

export const saveAndOverwriteSearch = (data) => {
    // const fs = require('fs');
    // const path = require("path");
    //write new search result data into lastSearch.json
    const lastSearchJson = new URL('../data/lastSearch.json', import.meta.url);
    fs.writeFile(lastSearchJson, JSON.stringify(data, null, 2), (error) => {
        if (error) {
            //alert user if error occurred
            console.log('An error has occurred while saving your search results', error);
            return;
        }
        //inform user of successful completion of task
        console.log('Most recent search data successfully saved');
    });
}

// module.exports = saveAndOverwriteSearch;