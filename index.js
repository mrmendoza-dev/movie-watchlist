


// https://www.omdbapi.com/?apikey=b062f19b&i=tt0083658
// https://www.omdbapi.com/?apikey=b062f19b&s=blade



const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const displayEl = document.getElementById("displayEl");
// const watchlistDisplayEl = document.getElementById("watchlistDisplay");

const startBtn = document.getElementById("startBtn");


let watchlist = [];
loadWatchlist();

searchBtn.addEventListener("click", ()=> {
    getMovies(searchInput.value);
})


startBtn.addEventListener("click", () => {
  startSearch();
});
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getMovies(searchInput.value);
  }
});



const key = "b062f19b";
const base = "https://www.omdbapi.com/";



async function getMovies(search) {
    let url = `${base}?apikey=${key}&s=${search}`;
    let response = await fetch(url);
    let data = await response.json()
    console.log(url);
    let results = data.Search;
    renderMovies(results);
    return results
}



async function renderMovies(movie_data) {

    let inputHtml = ``;

    if (!movie_data) {
        inputHtml = `
        <div id="defaultMessage" class="default-message">
            <p>Unable to find what you're looking for. Please try another search.</p>
        </div>`;
        displayEl.innerHTML = inputHtml;
        return;
    }

    movie_data.forEach((id)=> {
        let url = `${base}?apikey=${key}&i=${id.imdbID}`;

        fetch(url)
          .then((res) => res.json())
          .then((movie) => {
            let movieHtml = `
        <div class="movie__card">
        
            <img class="movie__poster" src="${movie.Poster}"/>

            <div class="movie__info">
                <div class="movie__main">
                    <p class="movie__title">${movie.Title}</p>
                    <p class="movie__year">${movie.Year}</p>
                    <p class="movie__rating">${movie.imdbRating}</p>
                </div>

                <div class="movie__sub">
                    <p class="movie__runtime">${movie.Runtime}</p>
                    <p class="movie__genre">${movie.Genre}</p>
                    <button class="movie__wl" onclick="addWatchlist('${id.imdbID}')">Watchlist</button>
                </div>

                <div class="">
                    <p class="movie__plot">${movie.Plot}</p>
                </div>

            </div>
        </div>`;
            inputHtml += movieHtml;
            displayEl.innerHTML = inputHtml;

          });

    })
}


function renderWatchlist() {
    watchlist = JSON.parse(localStorage.getItem("watchlist"));

        let inputHtml = ``;

    console.log(watchlist);
    watchlist.forEach((id) => {
      let url = `${base}?apikey=${key}&i=${id}`;

      fetch(url)
        .then((res) => res.json())
        .then((movie) => {
          let movieHtml = `
        <div class="movie__card">
            <img class="movie__poster" src="${movie.Poster}"/>

            <div class="movie__info">
                <div class="movie__main">
                    <p class="movie__title">${movie.Title}</p>
                    <p class="movie__year">${movie.Year}</p>
                    <p class="movie__rating">${movie.imdbRating}</p>
                </div>

                <div class="movie__sub">
                    <p class="movie__runtime">${movie.Runtime}</p>
                    <p class="movie__genre">${movie.Genre}</p>
                    <button class="movie__wl" onclick="addWatchlist('${id.imdbID}')">Watchlist</button>
                </div>

                <div class="">
                    <p class="movie__plot">${movie.Plot}</p>
                </div>

                </div>
            </div>`;
          inputHtml += movieHtml;
          watchlistDisplay.innerHTML = inputHtml;
        });
    });


}

// watchlistDisplayEl.addEventListener("load", renderWatchlist());




function loadWatchlist() {
    watchlist = JSON.parse(localStorage.getItem("watchlist"));
    console.log(watchlist);
    if (watchlist === null) {
        watchlist = [];
    }
}

function addWatchlist(movieId) {
    console.log(movieId);
    console.log(watchlist);
    
    if (watchlist.includes(movieId)) {
        watchlist = watchlist.filter((item) => item !== movieId);
    } else {
        watchlist.push(movieId);
    }
    localStorage.setItem("watchlist", JSON.stringify(watchlist));

}


function startSearch() {
    getMovies("blade");
}

// startSearch();

// renderWatchlist();




