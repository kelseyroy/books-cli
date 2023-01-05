import { formatSearchResults, saveAndOverwriteSearch } from "./index.js";

export const printSearchResults = (data) => {

    let searchResults = formatSearchResults(data);
    //write new search data into lastSearch.json 
    saveAndOverwriteSearch(searchResults);
    //print formatted information about search results into console
    const bookCount = data.length === 1 ? `There is 1 book that matches your search!` : `There are ${data.length} books that match your search!`
console.log(`\n
${bookCount}
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