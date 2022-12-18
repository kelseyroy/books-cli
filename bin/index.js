#!/usr/bin/env node

const yargs = require("yargs");
const search = require('../lib/commands/search');


const viewReadingList = () => console.log('READING LIST')

// const enterSearchTerms = async (selected) => {
//     let options = selected.map((term) => {
//         let prompt = {
//             message: term,
//             type: "string",
//             name: term,
//         }
//         return prompt;
//     })

//     await inquirer.prompt([
//         options
//     ], function (answers) {
//         // console.log(`author: ${searchTerms.author}`)
//         // console.log(`keyword: ${searchTerms.keyword}`)
//         // console.log(`title: ${searchTerms.title}`)
//         console.log(answers)

//     })
// }

const argv = yargs
    .usage('Usage: $0 <cmd> [options]')
    .command('search', 'use inquirer to prompt for your name', () => { }, search)
    .command('view', 'a classic yargs command without prompting', () => { }, viewReadingList)
    .demandCommand(1, 1, 'choose a command: search or view')
    .help('h').argv;
// const argv = yargs
//     .usage('Usage: $0 <cmd> [options]')
//     .command(
//         'search',
//         'Search for a book',
//     )
//     .example('$0 search -t Pride and Prejudice', 'Search for books with the title Pride and Prejudice')
//     .option("k", { alias: "keyword", describe: "Search using Keyword", type: "string" })
//     .option("a", { alias: "author", describe: "Search for an Author", type: "string" })
//     .option("t", { alias: "title", describe: "Search for a Title", type: "string" })
//     .option("s", { alias: "subject", describe: "Search for a Subject", type: "string" })
//     .option("isbn", { alias: "isbn", describe: "Search using the ISBN number", type: "string" })
//     .check(({ k, a, t, s, isbn }) => {
//         if (!k && !a && !t && !s && !isbn) {
//             throw new Error('Please enter a search term');
//         }
//         return true
//     })
//     .help('h').argv;


// {
//     "k": {
//         alias: "keyword",
//         describe: "Search using Keyword",
//         type: "string",
//     },
//     "a": {
//         alias: "author",
//         describe: "Search for an Author",
//         type: "string",
//     },
//     "t": {
//         alias: "title",
//         describe: "Search for a Title",
//         type: "string",
//     },
//     "s": {
//         alias: "subject",
//         describe: "Search using Subject",
//         type: "string",
//     },
//     "isbn": {
//         alias: "isbn",
//         describe: "Search using the ISBN number",
//         type: "string",
//     }
// }


// if (argv.k) {
//     console.log(`Searching for books with keyword ${argv.k}...`)
// } else {
//     console.log("Enter a search term after -s to search for a book!");
// }

// module.exports = gettingSetup;