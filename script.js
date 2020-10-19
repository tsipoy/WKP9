import React from "react";
import ReactDom from "react-dom";
import App from "./component/App"

ReactDom.render(<App />, document.getElementById("root"));

// const moviesEndpoint = 'https://ghibliapi.herokuapp.com/films';
// const div = document.querySelector('.movies');
// const input = document.querySelector('[name="search"]')

// async function fetchMovies() {
//     let response = await fetch(`${moviesEndpoint}?q=`);
//     console.log(`${moviesEndpoint}?q=`);
//     const movies = await response.json();
//     // Sort the score
//     movies.sort((a, b) => b.rt_score - a.rt_score);
//     function htmlGenerator(movieLists) {
//          return movieLists.map(movie => {
//             return `
//                 <div class="movie">
//                     <header>
//                         <h2>
//                         ${movie.title}
//                         </h2>
//                         <ul class="data">
//                             <li>Realease data: ${movie.release_date}</li>
//                             <li>Rt score: ${movie.rt_score}</li>
//                         </ul>
//                     </header>
//                     <nav>
//                     <ul>
//                         <p class="description">${movie.description}</p>
//                     </ul>
//                     <ul class="dir">
//                         <li>Director: ${movie.director}</li>
//                         <li>Producer: ${movie.producer}</li>
//                     </ul>
//                 </div>
//             `;
//         }).join('');
//     }
    
//     function lists() {
//         const html = htmlGenerator(movies);
//         div.innerHTML = html;
//     }

//     lists()
//     // Filter the lists by its title
//     const searchByTitle = (e) => {
//         // Get the value from the search by title input
//         let filteredListByTitle = input.value;

//         // Filter the song that includes what the user types in the search input
//         let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filteredListByTitle.toLowerCase()));
//         console.log(filteredMovies);
//         //   // Call the function that generate the lists add pass the filtered variable in it
//           const filteredMovieByTitleHtml =  htmlGenerator(filteredMovies); 
//             div.innerHTML = filteredMovieByTitleHtml;
//     }

//     input.addEventListener("input", searchByTitle);
// }
// fetchMovies();
