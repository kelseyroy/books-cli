// const search = require('./search');
// const list = require('./list')
// const save = require('./save')

import { search } from "./search.js";
import { list } from "./list.js"
import { save } from './save.js';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
// const create = require('../utilities/savePrompt')

export const booksCli = async () => {

    yargs(hideBin(process.argv))
        .usage('Usage: $0 <cmd> [options]')
        .command('search', 'search will prompt the user to input a keyword, title, author, subject, or isbn number. Users can hit enter to skip a search field.', () => { }, search)
        .command('save', 'save books from your last search', () => { }, save)
        .command('list', 'view your saved books', () => { }, list)
        .demandCommand(1, 1, 'choose a command: search, save or list')
        .help('h').argv;
};

// module.exports = booksCli;