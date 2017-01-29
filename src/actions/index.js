import axios from 'axios';
import Providers from '../js/Providers';

export const fetchTitle = (term) => {
    const netflixRequest = axios.get('http://netflixroulette.net/api/api.php?title=' + term);

    return {
        type: 'FETCH_TITLE',
        payload: netflixRequest
    }
};