const formatSearchResults = (data) => {
    let searchResults = [];
    data.map((book) => {
        //create new book object that will be saved to lastSearch.json
        let bookObj = {
            "id": book.id,
            "title": book.volumeInfo.title,
            "authors": [...book.volumeInfo.authors],
            "publisher": book.volumeInfo.publisher
        }
        if(!bookObj.authors.length){
            bookObj.authors = "No authors found!"
        } else if (!bookObj.publisher.length){
            bookObj.publisher = "No publisher found!"
        }
        searchResults.push(bookObj);
    })
    console.log(searchResults)
    return searchResults;
}

module.exports = formatSearchResults;