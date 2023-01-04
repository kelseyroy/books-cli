const sanitizeStr = require('./sanitizeStr')

const formatUserInput = async (promptAnswers) => {

  let searchTerms = Object.values(promptAnswers);
  // let filtered = Object.values(answers).filter(n => n);
  if (!searchTerms.filter(n => n).length) {
    //if user did not enter any search terms, provide directions
    throw new Error('At least one search term must have inputs.')
  } else {
    //format the strings passed to prompts so they can be readable parameters
    let formattedTerms = searchTerms.map((term) => {
      let sanitizedTerm = sanitizeStr(term).split(' ')
      if (sanitizedTerm.length > 1) {
        return sanitizedTerm.join('+');
      }
      return sanitizedTerm.join();
    })

    return {
      keyword: formattedTerms[0],
      title: formattedTerms[1],
      author: formattedTerms[2],
      subject: formattedTerms[3],
      isbn: formattedTerms[4],
    }
  }
}
module.exports = formatUserInput;