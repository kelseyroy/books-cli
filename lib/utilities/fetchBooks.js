import axios from 'axios';

export const fetchBooks = async url => {
    try {
        //make axios call to google books api using formatted url str
        const {data} = await axios.get(`${url}`)
        return data;
    } catch(error){
        console.error(error)
    }
}

