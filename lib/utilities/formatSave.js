const lastSearch = require('../data/lastSearch.json');
// const readingList = require('../data/readingList.json')

const formatSave = (data) => {
    if (!data.length) {
        //if user did not make a selection, provide directions
        console.log('At least one book must be selected.')
    } else {
        //return book id's from prompt
        let dataArr = data.value.split(':');
        let bookToSave = lastSearch.filter(({id}) => {
            return dataArr[0].include(id);
        })

        return bookToSave;
        // let ids = data.value.map((book) => {
        //     let arr = book.split(':')
        //     return arr[0]
        // })
        //filter which books to save using book id's
        // let booksToSave = lastSearch.filter(({ id }) => {
        //     return ids.includes(id)
        // })

        //append previous reading list with new books and write new array into readingList.json 
        
    }
}

module.exports = formatSave;