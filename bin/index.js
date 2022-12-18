#!/usr/bin/env node

const yargs = require("yargs");
const search = require('../lib/commands/search');


const viewReadingList = () => console.log('READING LIST')

const argv = yargs
    .usage('Usage: $0 <cmd> [options]')
    .command('search', 'use inquirer to prompt for your name', () => { }, search)
    .command('view', 'a classic yargs command without prompting', () => { }, viewReadingList)
    .demandCommand(1, 1, 'choose a command: search or view')
    .help('h').argv;
