import axios from 'axios';
import GuideboxKey from '../js/GuideboxKey';

export const storeName = (movieName) => {
    return {
        type: 'STORE_NAME',
        payload: movieName
    }
};

export const storeSources = (sources) => {
    return {
        type: 'STORE_SOURCES',
        payload: sources
    };
};

export const storePosterUrl = (posterUrl) => {
    return {
        type: 'STORE_POSTER_URL',
        payload: posterUrl
    };
};

export const fetchMovieData = (term) => {
    // http://api-public.guidebox.com/v2/search?api_key=80e15bce905b96de7f0b96b08959ecb8f5f44746&type=movie&query=Pulp%20Fiction
    // http://api-public.guidebox.com/v2/movies/79969?api_key=80e15bce905b96de7f0b96b08959ecb8f5f44746
    return (dispatch) => {
        return axios.get('http://api-public.guidebox.com/v2/search?api_key=' + GuideboxKey + '&type=movie&query=' + term)
            .then((response) => {
                if (response.data.results && response.data.results.length > 0) {
                    const movieData = response.data.results[0];
                    const movieId = movieData.id;
                    const movieName = movieData.title;
                    const posterUrl = movieData.poster_400x570;

                    dispatch(storeName(movieName));
                    dispatch(storePosterUrl(posterUrl));
                    console.log("Movie ID: " + movieId);
                    console.log(movieData);

                    return axios.get('http://api-public.guidebox.com/v2/movies/' + movieId + '?api_key=' + GuideboxKey);
                }

                throw new Error('Guidebox fetch failed');
            }).then((response) => {
                if (response) {
                    console.log(response.data.subscription_web_sources);
                    dispatch(storeSources(response.data.subscription_web_sources));
                } else {
                    throw new Error("No guidebox web sources available!");
                }
            }).catch((error) => {
                console.log(error.message);
            });
    }
};