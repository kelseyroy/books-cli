const printReadingList = (data) => {
    if (!data.length) {
        console.log(`No books saved yet! Search for books to save with the command book-cli search`);
    } else {
        console.log(`\n
        There are ${data.length} books in your reading list!

        ${data.map((book) => {
            return `
        _____________________________________________________________
        Title: ${book.title}
        Author(s): ${[...book.authors]}
        Publisher: ${book.publisher}
        Google Books ID: ${book.id}`
        })}
        _____________________________________________________________
        Search for more books to save with the command book-cli search
        `)

    }
}

module.exports = printReadingList;