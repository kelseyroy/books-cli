// const {sanitizeStr} = require('../lib/utilities');
import { sanitizeStr, formatUrl, formatUserInput, formatSearchResults } from '../lib/utilities/index.js';
import fs from 'fs';

describe('Input formatting', () => {
    const strings = [
        '"Pride and Prejudice"',
        "   Pride    and    prejudice   ",
        "-Pride +&% Prejudice_",
    ];

    const sanitzedString = 'pride and prejudice';

    const answers = [
        {
            keyword: '',
            title: '    garden of eden    ',
            author: 'ernest /hemingway/',
            subject: 'fiction?',
            isbn: '"9780743237222"'
        },
        {
            keyword: '',
            title: '',
            author: '',
            subject: '',
            isbn: ''
        }
    ];

    const sanitizedAnswers = {
        keyword: '',
        title: 'garden+of+eden',
        author: 'ernest+hemingway',
        subject: 'fiction',
        isbn: '9780743237222'
    };

    const url = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:garden+of+eden+inauthor:ernest+hemingway+insubject:fiction+isbn:9780743237222&printType=books&startIndex=0&maxResults=5&projection=lite'

    it('should remove quotes from user input', () => {
        expect(sanitizeStr(strings[0])).toEqual(sanitzedString);
    })
    it('should remove whitespace', () => {
        expect(sanitizeStr(strings[1])).toEqual(sanitzedString);
    })
    it('should remove special characters', () => {
        expect(sanitizeStr(strings[2])).toEqual(sanitzedString);
    })
    it('should return a sanitized answer obj', () => {
        expect(formatUserInput(answers[0])).toEqual(sanitizedAnswers);
    })
    it('should throw an error if no search terms are entered', () => {
        expect(function () {
            formatUserInput(answers[1])
        }).toThrow(new Error ('At least one search term must have inputs.'));
    })
    it('should return a properly formatted URL', () => {
        expect(formatUrl(sanitizedAnswers)).toEqual(url);
    })
})

describe('Search Result formatting', () => {

    const sanitizedResults = [
        {
            id: 'DDoEEAAAQBAJ',
            title: 'The Great Gatsby',
            authors: ['F. Scott Fitzgerald'],
            publisher: 'Scribner'
        },
        {
            id: 'eo8jQwAACAAJ',
            title: 'The Great Gatsby',
            authors: ['Anne Crow', 'F. Scott Fitzgerald'],
            publisher: 'Hodder Education'
        },
        {
            id: 'iZg0EAAAQBAJ',
            title: 'The Great Gatsby',
            authors: ['F. Scott Fitzgerald'],
            publisher: 'First Avenue Editions ™'
        },
        {
            id: 'dVlYzQEACAAJ',
            title: 'The Great Gatsby and Other Works',
            authors: ['F. Scott Fitzgerald'],
            publisher: 'Canterbury Classics'
        },
        {
            id: 'Al4NEAAAQBAJ',
            title: 'The Great Gatsby',
            authors: ['F. Scott Fitzgerald'],
            publisher: 'Penguin'
        }
    ]
    let data = [];
    beforeAll(function () {
        const keywordSearch = new URL('keywordSearchData.json', import.meta.url);
        let file = fs.readFileSync(keywordSearch, { encoding: 'utf8', flag: 'r' })
        data = JSON.parse(file)
    })

    it('should should format API data into an array of book objects', () => {
        expect(formatSearchResults(data)).toEqual(sanitizedResults);
    })
})