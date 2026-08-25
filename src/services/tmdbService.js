import tmdb from "../config/tmdb.js";

export async function getTrendingMedia() {
    const response = await tmdb.get("/trending/all/day")

    return response.data.results
}

export async function getPopularMovies() {
    const response = await tmdb.get("/movie/popular");

    return response.data.results
}

export async function getPopularSeries() {
    const response = await tmdb.get("/tv/popular");

    return response.data.results
}

export async function searchMedia(query) {
    const response = await tmdb.get("/search/multi", {
        params: {
            query,
            language: "pt-BR"
        },
    });

    return response.data.results
}

export async function getMovieDetails(id) {
    const response = await tmdb.get(`/movie/${id}`);

    return response.data;
}

export async function getSerieDetails(id) {
    const response = await tmdb.get(`/tv/${id}`);

    return response.data;
}

export async function getMovieTrailer(id) {
    const response = await tmdb.get(`/movie/${id}/videos`);

    return response.data.results;
}

export async function getSerieTrailer(id) {
    const response = await tmdb.get(`/tv/${id}/videos`);

    return response.data.results;
}

export async function getMovieCast(id) {
    const response = await tmdb.get(`/movie/${id}/credits`);

    return response.data.cast;
}

export async function getSerieCast(id) {
    const response = await tmdb.get(`/tv/${id}/credits`);

    return response.data.cast;
}

export async function getMovieRecommendations(id) {
    const response = await tmdb.get(`/movie/${id}/recommendations`);

    return response.data.results;
}

export async function getSerieRecommendations(id) {
    const response = await tmdb.get(`/tv/${id}/recommendations`);

    return response.data.results;
}

export async function getMovieProviders(id) {
    const response = await tmdb.get(`/movie/${id}/watch/providers`);

    return response.data.results;
}

export async function getSerieProviders(id) {
    const response = await tmdb.get(`/tv/${id}/watch/providers`);

    return response.data.results;
}

export async function getTopRatedMovies() {
    const response = await tmdb.get(`/movie/top_rated`);

    return response.data.results;
}

export async function getUpcomingMovies() {
    const response = await tmdb.get(`/movie/upcoming`);

    return response.data.results;
}

export async function getNowPlayingMovies() {
    const response = await tmdb.get(`/movie/now_playing`);

    return response.data.results;
}

export async function getOnTheAirSeries() {
    const response = await tmdb.get("/tv/on_the_air");

    return response.data.results;
}

export async function getTopRatedSeries() {
    const response = await tmdb.get("/tv/top_rated");

    return response.data.results;
}

export async function findMediaByTitle(title) {
    const results = await searchMedia(title);

    const media = results.find(item => 
       (item.media_type === "movie" || item.media_type === "tv") && 
       (
          item.title?.toLowerCase() === title.toLowerCase() || 
          item.name?.toLowerCase() === title.toLowerCase()
       )
    )

    return media || null
}