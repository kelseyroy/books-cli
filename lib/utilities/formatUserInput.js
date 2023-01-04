const sanitizeStr = require('./sanitizeStr')

const formatUserInput = (promptAnswers) => {
  let searchTerms = Object.values(promptAnswers);

  //format the strings passed to prompts so they can be readable parameters
  let formattedTerms = searchTerms.map((term) => {
    // let newTerm = term.toLowerCase().split(' ').filter(n => n);
    let sanitizedTerm = sanitizeStr(term).split(' ')
    if (sanitizedTerm.length > 1) {
      return sanitizedTerm.join('+');
    }
    return sanitizedTerm.join();
  })
  // console.log(formattedTerms)
  return console.log({
    keyword: formattedTerms[0],
    title: formattedTerms[1],
    author: formattedTerms[2],
    subject: formattedTerms[3],
    isbn: formattedTerms[4],
  })
}
module.exports = formatUserInput;