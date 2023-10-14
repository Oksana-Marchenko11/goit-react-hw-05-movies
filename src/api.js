import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '233297d4a0bf302b0bc846d2e5d7a397';

export const getTrending = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const getSearchByKeyword = async keyword => {
    const response = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
    );
    return response.data.results;
};

export const getMovieDetails = async movieId => {
    const response = await axios.get(
        `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
};

export const getCredits = async movieId => {
    const response = await axios.get(
        `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
};

export const getReviews = async movieId => {
    const response = await axios.get(
        `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
};
