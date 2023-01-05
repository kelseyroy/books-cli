export const printReadingList = (data) => {
    if (!data.length) {
        //if there are no saved books in readingList.json, prompt user to search first
        console.log(`No books saved yet! Search for books to save with the command:\nbooks-cli search`);
    } else {
        const bookCount = data.length === 1 ? `There is 1 book in your reading list!` : `There are ${data.length} books in your reading list!`
        //format how books are printed
        console.log(`\n
        ${bookCount}

        ${data.map((book) => {
            return `
        _____________________________________________________________
        Title: ${book.title}
        Author(s): ${[...book.authors]}
        Publisher: ${book.publisher}
        Google Books ID: ${book.id}`
        })}
        _____________________________________________________________
        Search for more books to save with the command:\nbooks-cli search
        `)

    }
}