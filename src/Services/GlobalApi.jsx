import axios from "axios";

const movieBaseUrl = "https:api.themoviedb.org/3";
const api_key = "1b8e97ca8422bb726698cb752f4be1d0";
const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=";

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBaseURL+api_key+"&with_genres="+id);

export default {
    getTrendingVideos,
    getMovieByGenreId
}

