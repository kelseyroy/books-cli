import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const searchPrompts = async () => {
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
    rl.close()
    return answers;
}