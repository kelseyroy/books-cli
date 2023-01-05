import fs from 'fs';

export const saveAndOverwriteSearch = (data) => {

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