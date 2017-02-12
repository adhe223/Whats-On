import axios from 'axios';
import GuideboxKey from '../js/GuideboxKey';

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

export const fetchGuidebox = (term) => {
    // http://api-public.guidebox.com/v2/search?api_key=80e15bce905b96de7f0b96b08959ecb8f5f44746&type=movie&query=Pulp%20Fiction
    // http://api-public.guidebox.com/v2/movies/79969?api_key=80e15bce905b96de7f0b96b08959ecb8f5f44746
    let guideboxMovieRequest;
    let movieSources;

    const guideboxQueryRequest = axios.get('http://api-public.guidebox.com/v2/search?api_key=' + GuideboxKey + '&type=movie&query=' + term)
            .then((response) => {
                if (response.data.results && response.data.results.length > 0) {
                    const movieId = response.data.results[0].id;
                    console.log("Movie ID: " + movieId);

                    return axios.get('http://api-public.guidebox.com/v2/movies/' + movieId + '?api_key=' + GuideboxKey);
                }

                throw new Error('Guidebox fetch failed');
            }).then((response) => {
                if (response) {
                    console.log(response.data.subscription_web_sources);
                } else {
                    console.log('Got no movie data back');
                }
            }).catch((error) => {
                console.log(error.message);
            });

    return {
        type: 'FETCH_GUIDEBOX',
        payload: guideboxQueryRequest
    };
};