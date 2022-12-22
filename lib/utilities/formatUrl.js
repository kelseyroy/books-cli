const formatUrl = (promptAnswers) => {
  //establish important parameters that we will pass to google books API
  let url = "https://www.googleapis.com/books/v1/volumes?q="
  const queryParams = ['+intitle:', '+inauthor:', '+subject:', '+isbn:'];
  //return only the strings passed to the prompts
  let searchTerms = Object.values(promptAnswers);

  //format the strings passed to prompts so they can be readable parameters
  let formattedTerms = searchTerms.map((term) => {
    let newTerm = term.toLowerCase().split(' ').filter(n => n);
    if (newTerm.length > 1) {
      return newTerm.join('+');
    }
    return newTerm.join();
  })

  if (formattedTerms[0] !== '') {
    //the keyword formatting had to be handled differently than the other parameters
    url += formattedTerms[0]
  }

  for (i = 1; i < formattedTerms.length; i++) {
    //matching parameters with formatted search terms
    if (formattedTerms[i] !== '') {
      let params = queryParams[i - 1] + formattedTerms[i];
      url += params
    }
  }
  //adding additional parameters that filter print type, max results and information returned
  return url += '&printType=books&startIndex=0&maxResults=5&projection=lite';
}

module.exports = formatUrl;