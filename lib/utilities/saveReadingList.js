import fs from 'fs';

export const saveReadingList = (data) => {

    const readingListJson = new URL('../data/readingList.json', import.meta.url);
    fs.writeFile(readingListJson, JSON.stringify(data, null, 2), (error) => {
        if (error) {
            //alert user if error occurred
            console.log('An error has occurred while saving your reading list', error);
            return;
        }
        //inform user of successful completion of task
        console.log(`\nReading list successfully updated`);
    });
}