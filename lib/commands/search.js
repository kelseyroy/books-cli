const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const { formatUrl, fetchBooks, printSearchResults, formatUserInput } = require('../utilities')

const search = async () => {
    try {
        const rl = readline.createInterface({ input, output });

        let keyword = await rl.question('Keyword (press enter to submit or skip):\n');
        let title = await rl.question('Title:\n');
        let author = await rl.question('Author:\n');
        let subject = await rl.question('Subject:\n');
        let isbn = await rl.question('ISBN Number:\n');

        let answers = {
            keyword: keyword,
            title: title,
            author: author,
            subject: subject,
            isbn: isbn,
        };
        rl.close()

        let formattedAnswers = await formatUserInput(answers);
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
    }

}

module.exports = search;