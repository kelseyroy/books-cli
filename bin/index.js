#!/usr/bin/env node
const yargs = require("yargs");
const {search, list, save} = require('../lib/commands')

const argv = yargs
    .usage('Usage: $0 <cmd> [options]')
    .command('search', 'search will prompt the user to input a keyword, title, author, subject, or isbn number. Users can hit enter to skip a search field.', () => { }, search)
    .command('save', 'save books from your last search', () => { }, save)
    .command('list', 'view your saved books', () => { }, list)
    .demandCommand(1, 1, 'choose a command: search, save or list')
    .help('h').argv;
