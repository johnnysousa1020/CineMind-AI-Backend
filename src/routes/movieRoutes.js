import { Router } from "express";
import { getTrending, 
    getMovies, 
    getSeries, 
    search, 
    getMovie, 
    getSerie as getSerieDetails, 
    movieTrailer, 
    seriesTrailer, 
    movieCast, 
    seriesCast,
    movieRecommendations,
    serieRecommendations,
    movieProviders,
    serieProviders,
    topRatedMovies,
    upcomingMovies,
    nowPlayingMovies,
    onTheAirSeries,
    topRatedSeries,
    getMovieFull,
    getSeriesFull, } from "../controllers/movieController.js";

const router = Router();

router.get("/trending", getTrending);
router.get("/movies/popular", getMovies);
router.get("/tv/popular", getSeries);
router.get("/search", search);
router.get("/movie/:id", getMovie)
router.get("/tv/:id", getSerieDetails)
router.get("/movie/:id/trailer", movieTrailer)
router.get("/tv/:id/trailer", seriesTrailer)
router.get("/movie/:id/cast", movieCast)
router.get("/tv/:id/cast", seriesCast)
router.get("/movie/:id/recommendations", movieRecommendations)
router.get("/tv/:id/recommendations", serieRecommendations)
router.get("/movie/:id/providers", movieProviders)
router.get("/tv/:id/providers", serieProviders)
router.get("/movies/top_rated", topRatedMovies)
router.get("/movies/upcoming", upcomingMovies)
router.get("/movies/now-playing", nowPlayingMovies)
router.get("/tv/on_the_air", onTheAirSeries)
router.get("/tv/top_rated", topRatedSeries)
router.get("/movie/:id/full", getMovieFull)
router.get("/tv/:id/full", getSeriesFull)

export default router