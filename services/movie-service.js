let movies = require("./movies.json")

module.exports = (app) => {
    const getAllMovies = (req, res) => {
        res.json(movies);
    }
    const deleteMovie = (req, res) => {
        const mid = req.params.movieId;
        movies = movies.filter(movie => movie._id !== mid)
        // res.json(movies) wasting network traffic
        res.sendStatus(200);
    }
    const createMovie = (req, res) => {
        const newMovie = req.body;
        movies = [...movies, newMovie]
        // res.json(movies)
        res.sendStatus(200)
    }


    app.post('/api/movies', createMovie)
    app.delete('/api/movies/:movieId', deleteMovie) // variable route
    app.get('/api/movies', getAllMovies);
}
