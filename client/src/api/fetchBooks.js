import axios from 'axios';

const fetchBooks = async () => {
    let data = [];
    const url = 'http://localhost:5000/books'
    await axios.get(url)
            .then((response) => {
                // console.log(response);
                data = response;
            })
            .catch(error => console.log(error))

    return data
} 

export default fetchBooks;