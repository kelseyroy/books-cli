'use strict'
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let prompts = [
    'Keyword (press enter to submit or skip)',
    'Title',
    'Author',
    'Subject',
    'ISBN Number',
]

const askQuestion = (theQuestion) => {
    return new Promise((resolve, reject) => {
        rl.question(theQuestion + ":\n", theAnswer => resolve(theAnswer));
    })
}

async function start() {
    const answers = [];
    for (prompt of prompts) {
        answers.push(await askQuestion(question));
    }

    const total = answers.reduce((a, b) => { return Number(a) + Number(b) });
    console.log(`The sum of array ${answers} is ${total}`);
    rl.close();
}


// const keywordQ = (answers) => {
//     return new Promise((resolve, reject) => {
//         rl.question('Keyword (press enter to submit or skip):\n', (answer) => {
//             answers[keyword] = answer;
//             resolve()
//         })
//     })
// }

// const askQuestion = (rl, question) => {
//     return new Promise(resolve => {
//         rl.question(question, (answer) => {
//             resolve(answer);
//         });
//     });
// }

// const askForSearchTerms = function(questions) {
//     return new Promise(async resolve => {
//         let rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         let results = [];
//         for(let i=0;i < questions.length;i++) {
//             const result = await askQuestion(rl, questions[i]);
//             results.push(result);
//         }
//         rl.close();
//         resolve(results);
//     })
// }


// const askForSearchTerms = async (answers) => {
//     await keywordQ(answers)
//     rl.close()
// }

module.exports = askForSearchTerms;