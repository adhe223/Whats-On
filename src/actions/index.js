import axios from 'axios';

export const fetchOmdb = (term) => {
    const omdbRequest = axios.get('https://www.omdbapi.com/?s=' + term);

    return {
        type: 'FETCH_OMDB',
        payload: omdbRequest
    }
};

export const fetchNetflix = (term) => {
    const netflixRequest = axios.get('http://netflixroulette.net/api/api.php?title=' + term);

    return {
        type: 'FETCH_NETFLIX',
        payload: netflixRequest
    };
};