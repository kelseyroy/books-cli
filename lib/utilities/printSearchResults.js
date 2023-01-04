const saveAndOverwriteSearch = require('./saveSearchResults')
const formatSearchResults = require('./formatSearchResults')

const printSearchResults = (data) => {
    // let searchResults = [];
    // let books = data.map((book) => {
    //     //create new book object that will be saved to lastSearch.json
    //     let bookObj = {
    //         "id": book.id,
    //         "title": book.volumeInfo.title,
    //         "authors": [...book.volumeInfo.authors],
    //         "publisher": book.volumeInfo.publisher
    //     }
    //     searchResults.push(bookObj);
    //     //return each book instance in the console log
    //     return `
    //     _____________________________________________________________
    //     Title: ${book.volumeInfo.title}
    //     Author(s): ${[...book.volumeInfo.authors]}
    //     Publisher: ${book.volumeInfo.publisher}
    //     Google Books ID: ${book.id}`
    // })
    let searchResults = formatSearchResults(data);
    //write new search data into lastSearch.json 
    saveAndOverwriteSearch(searchResults);
    //print formatted information about search results into console
console.log(`\n
There are ${data.length} books that match your search!
${searchResults.map(book => {
    return `
        _____________________________________________________________
        Title: ${book.volumeInfo.title}
        Author(s): ${[...book.volumeInfo.authors]}
        Publisher: ${book.volumeInfo.publisher}
        Google Books ID: ${book.id}`
})}
        _____________________________________________________________

If you would like to save a book, type books-cli save and you will be prompted to choose which of these books to save.
`)
}

module.exports = printSearchResults;