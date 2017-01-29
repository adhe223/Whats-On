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

    const guideboxQueryRequest = axios.get('http://api-public.guidebox.com/v2/search?api_key=' + GuideboxKey + '&type=movie&query=' + term).then(function(response) {
        if (response.data.results && response.data.results.length > 0)
        {
            const movieId = response.data.results[0].id;
            console.log("Movie ID: " + movieId);
            guideboxMovieRequest = axios.get('http://api-public.guidebox.com/v2/movies/' + movieId + '?api_key=' + GuideboxKey).then(function (response)
            {
                console.log(response.data.subscription_web_sources);
            });
        }
    });

    return {
        type: 'FETCH_GUIDEBOX',
        payload: guideboxQueryRequest
    };
};