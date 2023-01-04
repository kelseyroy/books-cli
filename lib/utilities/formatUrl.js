const formatUrl = (answerObj) => {
  //establish important parameters that we will pass to google books API
  let url = `https://www.googleapis.com/books/v1/volumes?q=${answerObj.keyword.length ? answerObj.keyword : ''}${answerObj.title.length ? '+intitle:' + answerObj.title : ''}${answerObj.author.length ? '+inauthor:' + answerObj.author : ''}${answerObj.subject.length ? '+insubject:' + answerObj.subject : ''}${answerObj.isbn.length ? '+isbn:' + answerObj.isbn : ''}`
  // const queryParams = ['+intitle:', '+inauthor:', '+subject:', '+isbn:'];


  //adding additional parameters that filter print type, max results and information returned
  return url += '&printType=books&startIndex=0&maxResults=5&projection=lite';
}

module.exports = formatUrl;


  // //return only the strings passed to the prompts
  // let searchTerms = Object.values(promptAnswers);

  // //format the strings passed to prompts so they can be readable parameters
  // let formattedTerms = searchTerms.map((term) => {
  //   let newTerm = term.toLowerCase().split(' ').filter(n => n);
  //   if (newTerm.length > 1) {
  //     return newTerm.join('+');
  //   }
  //   return newTerm.join();
  // })