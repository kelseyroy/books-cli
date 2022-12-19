const axios = require('axios');

const fetchBooks = async (url) => {
    try {
        const {data} = await axios.get(`${url}`)
        // const data = await response.json();
        console.info(data);
    } catch(error){
        console.error(error)
    }
}

module.exports = fetchBooks;

