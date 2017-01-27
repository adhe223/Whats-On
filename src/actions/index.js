import axios from 'axios';

export const fetchTitle = (term) => {
    const request = axios.get('http://netflixroulette.net/api/api.php?title=' + term);

    return {
        type: 'FETCH_TITLE',
        payload: request
    }
};