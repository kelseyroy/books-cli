// const formatUrl = require('../lib/utilities/formatUrl');

// describe('Format URL', () => {

//     answersObj = {
//             keyword: '',
//             title: 'Pride and Prejudice',
//             author: 'Jane Austen',
//             subject: 'Fiction',
//             isbn: ''
//         };
//         expected = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:pride+and+prejudice+inauthor:jane+austen+subject:fiction&printType=books&startIndex=0&maxResults=5&projection=lite'

    
//     it('should return a properly formatted Google Books API URL when passed and object of search term answers', async function () {
//         // let answersObj = {
//         //     keyword: '',
//         //     title: 'Pride and Prejudice',
//         //     author: 'Jane Austen',
//         //     subject: 'Fiction',
//         //     isbn: ''
//         // };
//         // let expected = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:pride+and+prejudice+inauthor:jane+austen+subject:fiction&printType=books&startIndex=0&maxResults=5&projection=lite'
//         // let expected = url;
//         let actual = formatUrl(answersObj)
//         // const result = await formatUrl(answersObj);
//         expect(actual).toBe(actual)
//     })
// })