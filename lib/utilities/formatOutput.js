const formatAnswers = (promptAnswers) => {
    let searchTerms = Object.values(promptAnswers);

    //format the strings passed to prompts so they can be readable parameters
    let formattedTerms = searchTerms.map((term) => {
      let newTerm = term.toLowerCase().split(' ').filter(n => n);
      if (newTerm.length > 1) {
        return newTerm.join('+');
      }
      return newTerm.join();
    })
    // JSON.stringify( promptAnswers, null, 2 );
    console.log(formattedTerms)
}
module.exports = formatAnswers;