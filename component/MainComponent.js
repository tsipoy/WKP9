import React, { useState, useEffect } from "react";

function MainComponent() {
    const [allMovies, setAllMovies] = useState([])
    // allMovies = [];

    async function fetchMovies() {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const result = await response.json();
        console.log(allMovies)
        console.log(result)
        setAllMovies(result);
    }

    useEffect(() => {
        fetchMovies()
    }, []);
    const sortedMovies = allMovies.sort((a, b) => b.rt_score - a.rt_score);

    return (
        // SHOW THE DATA
        sortedMovies
            .map(movie => {
                return (
                    <article className="movie" key={movie.id}>
                        <header>
                            <h2>
                                {movie.title}
                            </h2>
                            <ul className="data">
                                <li >Realease data: {movie.release_date}</li>
                                <li >Rt score: {movie.rt_score}</li>
                            </ul>
                        </header>
                        <nav>
                            <p className="description">{movie.description}</p>
                            <ul className="dir">
                                <li >Director: {movie.director}</li>
                                <li >Producer: {movie.producer}</li>
                            </ul>
                        </nav>
                    </article>
                )
            })

    )
}

export default MainComponent