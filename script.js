console.log('Ok!');

const moviesEndpoint = 'https://ghibliapi.herokuapp.com/films';
const div = document.querySelector('.movies');
const input = document.querySelector('[name="search"]')

async function fetchMovies () {
    let response = await fetch(`${moviesEndpoint}?q=`);
    console.log(`${moviesEndpoint}?q=`);
    const movie = await response.json();

    // Sort the score
    const sortRtScore = movie.sort((a, b) => {
        return b.rt_score - a.rt_score ;
    });


    const html = movie.map(movie => {
        return `
            <div class="movie">
                <header>
                    <h2>
                    ${movie.title}
                    </h2>
                    <ul class="data">
                        <li>Realease data: ${movie.release_date}</li>
                        <li>Rt score: ${movie.rt_score}</li>
                    </ul>
                </header>
                <nav>
                <ul>
                    <p class="description">${movie.description}</p>
                </ul>
                <ul class="dir">
                    <li>Director: ${movie.director}</li>
                    <li>Producer: ${movie.producer}</li>
                </ul>
            </div>
        `;
       }).join('');
    console.log(html);
    div.innerHTML = html;
}
fetchMovies();

// Filter the lists by its title
const searchByTitle = (e) => {
  // Get the value from the search by title input
  let filteredListByTitle = input.value;
  // Filter the song that includes what the user types in the search input
  let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filteredListByTitle.toLowerCase()));
  // Call the function that generate the lists add pass the filtered variable in it
  const filteredMovieByTitleHtml = fetchMovies(input);
  // filteredSong = filteredSong.sort((firstSong , secondSong) => secondSong.score - firstSong.score);
  moviesListsContainer.innerHTML = filteredMovieByTitleHtml;
}