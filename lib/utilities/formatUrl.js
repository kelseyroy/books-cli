export const formatUrl = (answerObj) => {
  //establish important parameters that we will pass to google books API
  let url = `https://www.googleapis.com/books/v1/volumes?q=${!answerObj.keyword.length ? '' : answerObj.keyword}${answerObj.title.length ? '+intitle:' + answerObj.title : ''}${answerObj.author.length ? '+inauthor:' + answerObj.author : ''}${answerObj.subject.length ? '+insubject:' + answerObj.subject : ''}${answerObj.isbn.length ? '+isbn:' + answerObj.isbn : ''}`
  //adding additional parameters that filter print type, max results and information returned
  return url += '&printType=books&startIndex=0&maxResults=5&projection=lite';
}