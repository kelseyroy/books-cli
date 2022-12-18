#!/usr/bin/env node
const yargs = require("yargs");

const options = yargs
    .usage("Usage: -s <search>")
    .option("s", { alias: "search", describe: "Search term", type: "string", demandOption: true })
    .argv;

if (options.search) {
    console.log(`Searching for books with keyword ${options.search}...`)
} else {
    console.log("Enter a search term after -s to search for a book!");
}

// module.exports = gettingSetup;