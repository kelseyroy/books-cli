const saveReadingList = (data) => {
    const fs = require('fs');
    const path = require("path");
    //write new reading list data into readingList.json
    fs.writeFile(path.join(__dirname, '..', "data", 'readingList.json'), JSON.stringify(data, null, 2), (error) => {
        if (error) {
            //alert user if error occurred
            console.log('An error has occurred while saving your reading list', error);
            return;
        }
        //inform user of successful completion of task
        console.log('Reading list successfully updated');
    });
}

module.exports = saveReadingList;