const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const searchPrompts = async () => {
    const rl = readline.createInterface({ input, output });

    let keyword = await rl.question('Keyword (press enter to submit or skip):\n');
    let title = await rl.question('Title:\n');
    let author = await rl.question('Author:\n');
    let subject = await rl.question('Subject:\n');
    let isbn = await rl.question('ISBN Number:\n');

    let answers = {
        keyword: keyword,
        title: title,
        author: author,
        subject: subject,
        isbn: isbn,
    };
    console.log(answers)
    rl.close()
    return answers;
}

module.exports = searchPrompts;