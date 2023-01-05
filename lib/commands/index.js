import { search } from "./search.js";
import { list } from "./list.js"
import { save } from './save.js';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export const booksCli = async () => {

    yargs(hideBin(process.argv))
        .usage('Usage: $0 <cmd> [options]')
        .command('search', 'Search will prompt the user to input a keyword, title, author, subject, or isbn number. Users can hit enter to skip a search field.', () => { }, search)
        .command('save', 'Save books from your last search. Users can navigate the options using their up/down arrows and can press enter to select a book to save. ctrl+c or escape allows the users to exit the menu anytime.', () => { }, save)
        .command('list', 'View your saved books. Use ctrl+c to exit the list anytime.', () => { }, list)
        .demandCommand(1, 1, 'choose a command: search, save or list')
        .help('h').argv;
};