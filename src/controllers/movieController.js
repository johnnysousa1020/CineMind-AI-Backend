import { getTrendingMedia, 
    getPopularMovies, 
    getPopularSeries, 
    searchMedia, 
    getMovieDetails, 
    getSerieDetails, 
    getMovieTrailer, 
    getSerieTrailer, 
    getMovieCast, 
    getSerieCast,
    getMovieRecommendations,
    getSerieRecommendations,
    getMovieProviders,
    getSerieProviders,
    getTopRatedMovies,
    getUpcomingMovies,
    getNowPlayingMovies,
    getOnTheAirSeries,
    getTopRatedSeries } from "../services/tmdbService.js";

export async function getTrending(req, res) {
    try{
        const data = await getTrendingMedia();

        res.json(data)
    }catch(error){
        console.error(error.response?.data)
        console.error(error.message)
        
        res.status(500).json({ message: "Erro ao buscar dados. "})
    }
}

export async function getMovies(req, res) {
    try{
        const data = await getPopularMovies();

        res.json(data)
    }catch(error){
        console.error(error.response?.data)
        
        res.status(500).json({ message: "Erro ao buscar filmes", })
    }
}

export async function getSeries(req, res) {
    try{
        const data = await getPopularSeries();

        res.json(data)
    }catch(error){
        console.error(error.response?.data)
        
        res.status(500).json({ message: "Erro ao buscar séries", })
    }
}

export async function search(req, res) {
    try{
        const { query } = req.query;

        if(!query){
            return res.status(400).json({
                message: "Informe um termo para pesquisa."
            });
        }

        const data = await searchMedia(query)

        res.json(data)
    }catch(error){
        console.error(error.response?.data || error.message)

        res.status(500).json({
            message: "Erro ao pesquisar."
        });
    }
}

export async function getMovie(req, res) {
    try{
        const { id } = req.params;

        const data = await getMovieDetails(id)

        res.json(data)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar detalhes do filme."
        })
    }
}

export async function getSerie(req, res) {
    try{
        const { id } = req.params;

        const data = await getSerieDetails(id)

        res.json(data)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar detalhes da série."
        })
    }
}

export async function movieTrailer(req, res) {
    try{
        const { id } = req.params;

        const videos = await getMovieTrailer(id)

        const trailer = videos.find(
            (video) => 
                video.type === "Trailer" && 
                video.site === "YouTube"
        );

        res.json(trailer || null)
    }catch(error){
        console.error(error.response?.data || error.message);

        res.status(500).json({
            message: "Erro ao buscar trailer"
        })
    }
}

export async function seriesTrailer(req, res) {
    try{
        const { id } = req.params;

        const videos = await getSerieTrailer(id)

        const trailer = videos.find(
            (video) => 
                video.type === "Trailer" && 
                video.site === "YouTube"
        );

        res.json(trailer || null)
    }catch(error){
        console.error(error.response?.data || error.message);

        res.status(500).json({
            message: "Erro ao buscar trailer"
        })
    }
}

export async function movieCast(req, res) {
    try{
        const { id } = req.params;

        const cast = await getMovieCast(id)

        res.json(cast)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar elenco."
        })
    }
}

export async function seriesCast(req, res) {
    try{
        const { id } = req.params;

        const cast = await getSerieCast(id)

        res.json(cast)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar elenco."
        })
    }
}

export async function movieRecommendations(req, res) {
    try{
        const { id } = req.params;

        const recommendations = await getMovieRecommendations(id)

        res.json(recommendations)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar recomendações."
        })
    }
}

export async function serieRecommendations(req, res) {
    try{
        const { id } = req.params;

        const recommendations = await getSerieRecommendations(id)

        res.json(recommendations)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar recomendações."
        })
    }
}

export async function movieProviders(req, res) {
    try{
        const { id } = req.params;

        const providers = await getMovieProviders(id)

        res.json(providers)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar provedores."
        })
    }
}

export async function serieProviders(req, res) {
    try{
        const { id } = req.params;

        const providers = await getSerieProviders(id)

        res.json(providers)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar provedores."
        })
    }
}

export async function topRatedMovies(req, res) {
    try{

        const movies = await getTopRatedMovies()

        res.json(movies)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar filmes mais avaliados."
        })
    }
}

export async function upcomingMovies(req, res) {
    try{

        const movies = await getUpcomingMovies()

        res.json(movies)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar próximos lançamentos."
        })
    }
}

export async function nowPlayingMovies(req, res) {
    try{

        const movies = await getNowPlayingMovies()

        res.json(movies)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar filmes em cartaz."
        })
    }
}

export async function onTheAirSeries(req, res) {
    try{

        const serie = await getOnTheAirSeries()

        res.json(serie)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar séries no ar."
        })
    }
}

export async function topRatedSeries(req, res) {
    try{

        const serie = await getTopRatedSeries()

        res.json(serie)
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar séries mais bem avaliadas."
        })
    }
}

export async function getMovieFull(req, res) {
    try{
        const { id } = req.params;

        const [
            details,
            trailers,
            cast,
            recommendations,
            providers
        ] = await Promise.all([
            getMovieDetails(id),
            getMovieTrailer(id),
            getMovieCast(id),
            getMovieRecommendations(id),
            getMovieProviders(id),
        ])

        const  trailer = trailers.find(
            video => 
                video.type === "Trailer" &&
                video.site === "YouTube"
        )

        res.json({
            details,
            trailer,
            cast,
            recommendations,
            providers,
        })
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar informações completas."
        })
    }
}

export async function getSeriesFull(req, res) {
    try{
        const { id } = req.params;

        const [
            details,
            trailers,
            cast,
            recommendations,
            providers
        ] = await Promise.all([
            getSerieDetails(id),
            getSerieTrailer(id),
            getSerieCast(id),
            getSerieRecommendations(id),
            getSerieProviders(id),
        ])

        const  trailer = trailers.find(
            video => 
                video.type === "Trailer" &&
                video.site === "YouTube"
        )

        res.json({
            details,
            trailer,
            cast,
            recommendations,
            providers,
        })
    }catch(error){
        console.error(error.response?.data || error.message)
        res.status(500).json({
            message: "Erro ao buscar informações completas."
        })
    }
}