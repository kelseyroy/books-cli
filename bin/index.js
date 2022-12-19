#!/usr/bin/env node

const yargs = require("yargs");
const {search, list} = require('../lib/commands')

// const viewReadingList = () => console.log('READING LIST')

const argv = yargs
    .usage('Usage: $0 <cmd> [options]')
    .command('search', 'search will prompt the user to input a keyword, title, author, subject, or isbn number. Users can hit enter to skip.', () => { }, search)
    .command('save', 'save books from your last search', () => { }, viewReadingList)
    .command('list', 'view your saved books', () => { }, list)
    .demandCommand(1, 1, 'choose a command: search or view')
    .help('h').argv;
