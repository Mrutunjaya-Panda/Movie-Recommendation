//Implement all your function here to make it a working application.
const apiKey = "2428c06bd4f2dd97d8fd8b25c10c31c5";
const genreSelect = document.getElementById("genres");
const playBtn = document.getElementById("playBtn");
const likeBtn = document.getElementById("likeBtn");
const moviePoster = document.getElementById("moviePoster");
const movieText = document.getElementById("movieText");
const likeOrDislikeDiv = document.getElementById("likeOrDislikeBtns");

let selectedGenre = null;
let movies = [];
let currentMovieIndex = 0;

//function to fetch genres and populate the dropdown
function fetchGenres(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
    xhr.addEventListener("load",function(){
        if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            response.genres.forEach((genre) => {
                const option = document.createElement("option");
                option.value = genre.id;
                option.textContent = genre.name;
                genreSelect.appendChild(option);
            });
        }else{
            console.error("Failed to fetch genres");
        }

    });
    xhr.send();
}

//function to fetch movies of selected genre
function fetchMovies(genreId){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
    xhr.addEventListener("load",function(){
        if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            movies = response.results;
            if(movies.length > 0){
                currentMovieIndex = Math.floor(Math.random()*movies.length);
                displayMovie(movies[currentMovieIndex]);
                likeOrDislikeDiv.style.display = "block";
            }else{
                moviePoster.innerHTML = "";
                movieText.innerHTML = "<h2>No movies found for this genre</h2>";
            }
        }else{
            console.error("Failed to fetch movies");
        }
    });
    xhr.send();
}

//function to display movie details
function displayMovie(movie){
    const xhr = new XMLHttpRequest();
    xhr.open("GET",`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`);
    xhr.onload = function(){
        if(xhr.status === 200){
            const details = JSON.parse(xhr.responseText);
            moviePoster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${details.poster_path}" alt="${details.title}"/>`;
            movieText.innerHTML = `<h2 id="movieTitle">${details.title}</h2>
            <p id="movieOverview"> ${details.overview || "No overview available."}</p>`;
        }else{
            console.error("Failed to fetch movie details");
        }
    };
    xhr.send();
}

//event listeners
playBtn.addEventListener("click",function(){
    selectedGenre = genreSelect.value;
    if(selectedGenre){
        fetchMovies(selectedGenre);
    }
});
likeBtn.addEventListener("click",function(){
    if(movies.length > 0){
        currentMovieIndex = (currentMovieIndex + 1) % movies.length;
        displayMovie(movies[currentMovieIndex]);
    }

});

//initial fetch of genres
fetchGenres();
