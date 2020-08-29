console.log('Ok!');

const moviesEndpoint = 'https://ghibliapi.herokuapp.com/films';
const div = document.querySelector('.movies');

async function fetchMovies () {
    let response = await fetch(`${moviesEndpoint}?q=`);
    console.log(`${moviesEndpoint}?q=`);
    const movie = await response.json();
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
                    <li>Diretor: ${movie.director}</li>
                    <li>Producer: ${movie.producer}</li>
                </ul>
            </div>
        `;
       }).join('');
    console.log(html);
    div.innerHTML = html;
}
fetchMovies();