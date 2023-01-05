export const formatSearchResults = (data) => {
    let searchResults = [];

    data.map((book) => {
        //create new book object that will be saved to lastSearch.json
        let bookObj = {
            "id": book.id,
            "title": book.volumeInfo.title,
            "authors": (!book.volumeInfo.authors || !book.volumeInfo.authors.length) ? "No authors found!" : [...book.volumeInfo.authors],
            "publisher": (!book.volumeInfo.publisher || !book.volumeInfo.publisher.length) ? "No publisher found!" : book.volumeInfo.publisher,
        }
        searchResults.push(bookObj);
    })
    return searchResults;
}