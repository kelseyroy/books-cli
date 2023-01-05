import {formatUrl, fetchBooks, printSearchResults, formatUserInput, searchPrompts} from '../utilities/index.js'

export const search = async () => {
    try {

        let answers = await searchPrompts();

        let formattedAnswers = formatUserInput(answers);
        //format the url to return a quereyable string
        let url = formatUrl(formattedAnswers);
        //make an axios call to google books api and return data
        let useFetchBooks = await fetchBooks(url);
        if (useFetchBooks.totalItems === 0) {
            //throw error if the search terms yielded no results.
            throw new Error(`Sorry, there were no books that matched your search terms. Please check your spelling and try again!`)
        } else {
            //format api data and write data to lastSearch.json
            printSearchResults(useFetchBooks.items);
            return useFetchBooks.items
        }

    } catch (error) {
        console.error(`Whoops! An error occured while searching for books. ${error}`)
        console.trace(error)
    }

}