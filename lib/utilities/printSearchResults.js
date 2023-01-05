import { formatSearchResults, saveAndOverwriteSearch } from "./index.js";

export const printSearchResults = (data) => {

    let searchResults = formatSearchResults(data);
    //write new search data into lastSearch.json 
    saveAndOverwriteSearch(searchResults);
    //print formatted information about search results into console
console.log(`\n
There are ${searchResults.length} books that match your search!
${searchResults.map(book => {
    return `
        _____________________________________________________________
        Title: ${book.title}
        Author(s): ${[...book.authors]}
        Publisher: ${book.publisher}
        Google Books ID: ${book.id}`
})}
        _____________________________________________________________

If you would like to save a book, type books-cli save and you will be prompted to choose which of these books to save.
`)
}