const saveAndOverwriteSearch = require('./saveSearchResults')

const printSearchResults = (data) => {
    let searchResults = [];
    let books = data.map((book) => {
        let bookObj = {
            "id": book.id,
            "title": book.volumeInfo.title,
            "authors": [...book.volumeInfo.authors],
            "publisher": book.volumeInfo.publisher
        }
        searchResults.push(bookObj);
        return `
        _____________________________________________________________
        Title: ${book.volumeInfo.title}
        Author(s): ${[...book.volumeInfo.authors]}
        Publisher: ${book.volumeInfo.publisher}
        Google Books ID: ${book.id}`
    })
    saveAndOverwriteSearch(searchResults);
console.log(`\n
There are ${data.length} books that match your search!
${books}
_____________________________________________________________

If you would like to save a book, type books-cli save and you will be prompted to choose which of these books to save.
`)
}

module.exports = printSearchResults;