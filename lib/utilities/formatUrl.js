const formatUrl = (obj) => {
    let url = "https://www.googleapis.com/books/v1/volumes?q="
    const queryParams = ['+intitle:', '+inauthor:', '+subject:', '+isbn:'];
    let searchTerms = Object.values(obj);

    let formattedTerms = searchTerms.map((term) => {
      let newTerm = term.toLowerCase().split(' ').filter(n => n);
      if (newTerm.length > 1) {
        return newTerm.join('+');
      }
      return newTerm.join();
    })
  
    if (formattedTerms[0] !== '') {
      url += formattedTerms[0]
    }
  
    for (i = 1; i < formattedTerms.length; i++) {
      if (formattedTerms[i] !== '') {
        let params = queryParams[i - 1] + formattedTerms[i];
        url += params
      }
    }
    return url += '&printType=books&startIndex=0&maxResults=5&projection=lite';
  }

module.exports = formatUrl;