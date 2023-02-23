import "./MovieCard.css"
  import { MyContext } from "../../App";
import React, { useState, useEffect, useContext } from "react";

export default function MovieCard(props: any) {
    const { watchlist, setWatchlist} = useContext(MyContext);

   const movie = props.movie;

   
//  function addToWatchlist(id: any) {
//    console.log("watchlist");
//  }





   function addToWatchlist(id: any) {

    let newWatchlist = watchlist;
     if (newWatchlist.includes(id)) {
       newWatchlist.splice(newWatchlist.indexOf(id), 1);
     } else {
       newWatchlist.push(id);
     }
     console.log(newWatchlist);

     setWatchlist(newWatchlist);
    //  localStorage.setItem("watchlist", JSON.stringify(watchlist));
   }

   
    return (
      <div className="MovieCard">
        <img className="movie-poster" src={movie.Poster} />

        <div className="movie-info">
          <div className="movie-main">
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-year">{movie.Year}</p>

            <i className="star fa-solid fa-star" title="IMDb Rating"></i>

            <p className="movie-rating">{movie.imdbRating}</p>
          </div>

          <div className="movie-sub">
            <p className="movie-runtime">{movie.Runtime}</p>
            <p className="movie-genre">{movie.Genre}</p>

            <button
              className="btn-wl"
              onClick={() => {
                addToWatchlist(movie.imdbID);
              }}
            >
              {watchlist.includes(movie.imdbID) ? (
                <i
                  className="fa-solid fa-circle-plus"
                  title="Add to Watchlist"
                ></i>
              ) : (
                <i
                  className="fa-solid fa-circle-minus"
                  title="Remove from Watchlist"
                ></i>
              )}
              <p className="wl-text">Watchlist</p>
            </button>
          </div>

          <div className="">
            <p className="movie-plot">{movie.Plot}</p>
          </div>
        </div>
      </div>
    );
}

[
    {
        "Title": "Blade II",
        "Year": "2002",
        "Rated": "R",
        "Released": "22 Mar 2002",
        "Runtime": "117 min",
        "Genre": "Action, Horror, Sci-Fi",
        "Director": "Guillermo del Toro",
        "Writer": "Marv Wolfman, Gene Colan, David S. Goyer",
        "Actors": "Wesley Snipes, Kris Kristofferson, Ron Perlman",
        "Plot": "Blade forms an uneasy alliance with the vampire council in order to combat the Reapers, who are feeding on vampires.",
        "Language": "English, Romanian, Czech",
        "Country": "United States, Germany",
        "Awards": "6 wins & 10 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWVjZTIzNDYtNTBlNC00NTJjLTkzOTEtOTE0MjlhYzI2YTcyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "57%"
            },
            {
                "Source": "Metacritic",
                "Value": "52/100"
            }
        ],
        "Metascore": "52",
        "imdbRating": "6.7",
        "imdbVotes": "222,314",
        "imdbID": "tt0187738",
        "Type": "movie",
        "DVD": "03 Sep 2002",
        "BoxOffice": "$82,348,319",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Blade",
        "Year": "1998",
        "Rated": "R",
        "Released": "21 Aug 1998",
        "Runtime": "120 min",
        "Genre": "Action, Horror, Sci-Fi",
        "Director": "Stephen Norrington",
        "Writer": "David S. Goyer",
        "Actors": "Wesley Snipes, Stephen Dorff, Kris Kristofferson",
        "Plot": "A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.",
        "Language": "English, Russian, Serbian",
        "Country": "United States",
        "Awards": "5 wins & 11 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "57%"
            },
            {
                "Source": "Metacritic",
                "Value": "47/100"
            }
        ],
        "Metascore": "47",
        "imdbRating": "7.1",
        "imdbVotes": "279,224",
        "imdbID": "tt0120611",
        "Type": "movie",
        "DVD": "09 Nov 2004",
        "BoxOffice": "$70,087,718",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Blade Runner 2049",
        "Year": "2017",
        "Rated": "R",
        "Released": "06 Oct 2017",
        "Runtime": "164 min",
        "Genre": "Action, Drama, Mystery",
        "Director": "Denis Villeneuve",
        "Writer": "Hampton Fancher, Michael Green, Philip K. Dick",
        "Actors": "Harrison Ford, Ryan Gosling, Ana de Armas",
        "Plot": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        "Language": "English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish",
        "Country": "United States, United Kingdom, Canada, Spain",
        "Awards": "Won 2 Oscars. 100 wins & 165 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "8.0",
        "imdbVotes": "582,904",
        "imdbID": "tt1856101",
        "Type": "movie",
        "DVD": "16 Jan 2018",
        "BoxOffice": "$92,071,675",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Blade Runner",
        "Year": "1982",
        "Rated": "R",
        "Released": "25 Jun 1982",
        "Runtime": "117 min",
        "Genre": "Action, Drama, Sci-Fi",
        "Director": "Ridley Scott",
        "Writer": "Hampton Fancher, David Webb Peoples, Philip K. Dick",
        "Actors": "Harrison Ford, Rutger Hauer, Sean Young",
        "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
        "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 13 wins & 19 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.1",
        "imdbVotes": "775,925",
        "imdbID": "tt0083658",
        "Type": "movie",
        "DVD": "30 Oct 2001",
        "BoxOffice": "$32,914,489",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Dragon Blade",
        "Year": "2015",
        "Rated": "R",
        "Released": "04 Sep 2015",
        "Runtime": "127 min",
        "Genre": "Action, Drama, Fantasy",
        "Director": "Daniel Lee",
        "Writer": "Daniel Lee",
        "Actors": "Jackie Chan, John Cusack, Adrien Brody",
        "Plot": "When corrupt Roman leader Tiberius arrives with a giant army to claim the Silk Road, Huo An teams up his army with an elite Legion of defected Roman soldiers led by General Lucius to protect his country and his new friends.",
        "Language": "Mandarin, English, Latin",
        "Country": "China, Hong Kong",
        "Awards": "4 wins & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MjgxOTQ5MF5BMl5BanBnXkFtZTgwODA3NTUwNjE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "5.9/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "35%"
            },
            {
                "Source": "Metacritic",
                "Value": "41/100"
            }
        ],
        "Metascore": "41",
        "imdbRating": "5.9",
        "imdbVotes": "20,367",
        "imdbID": "tt3672840",
        "Type": "movie",
        "DVD": "22 Dec 2015",
        "BoxOffice": "$74,068",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Blade of the Immortal",
        "Year": "2017",
        "Rated": "R",
        "Released": "03 Nov 2017",
        "Runtime": "140 min",
        "Genre": "Action, Drama, Fantasy",
        "Director": "Takashi Miike",
        "Writer": "Hiroaki Samura, Tetsuya Oishi",
        "Actors": "Takuya Kimura, Hana Sugisaki, Sôta Fukushi",
        "Plot": "Cursed with a life of immortality, a samurai is tasked by a young girl to help avenge the death of her father. Based on the manga series by Hiroaki Samura.",
        "Language": "Japanese",
        "Country": "Japan, United Kingdom, South Korea",
        "Awards": "1 win & 10 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzIwYmJlMjktMzJiMy00YmQzLThmNWYtNWY3NGViZjc4MzYwXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "86%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "6.7",
        "imdbVotes": "18,270",
        "imdbID": "tt5084170",
        "Type": "movie",
        "DVD": "13 Feb 2018",
        "BoxOffice": "$150,532",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Shinobi: Heart Under Blade",
        "Year": "2005",
        "Rated": "R",
        "Released": "17 Sep 2005",
        "Runtime": "107 min",
        "Genre": "Action, Drama, Fantasy",
        "Director": "Ten Shimoyama",
        "Writer": "Kenya Hirata, Fûtarô Yamada",
        "Actors": "Yukie Nakama, Joe Odagiri, Tomoka Kurotani",
        "Plot": "Star-crossed lovers must fight on opposing sides in a battle that will determine the next Shogun.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "4 wins & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjZhMTNmMTItNmU4Mi00YTdkLWFkZWUtOGExNTQ3MGRiYWYyXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.8/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "6.8",
        "imdbVotes": "12,712",
        "imdbID": "tt0475723",
        "Type": "movie",
        "DVD": "01 Jul 2012",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Fate/stay night [Unlimited Blade Works]",
        "Year": "2014–2015",
        "Rated": "TV-14",
        "Released": "04 Oct 2014",
        "Runtime": "1 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "N/A",
        "Writer": "N/A",
        "Actors": "Noriaki Sugiyama, Kana Ueda, Bryce Papenbrook",
        "Plot": "A group of seven mages gets chosen to become masters of seven classes of heroic spirits, in order to fight and win the Holy Grail.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "1 win & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTg5ZjI5ZTAtOWE2OS00MjY4LWI4ZDQtMzEzMDY4MTgzYWJlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.0",
        "imdbVotes": "8,191",
        "imdbID": "tt3621796",
        "Type": "series",
        "totalSeasons": "2",
        "Response": "True"
    },
    {
        "Title": "Blade: Trinity",
        "Year": "2004",
        "Rated": "R",
        "Released": "08 Dec 2004",
        "Runtime": "113 min",
        "Genre": "Action, Horror, Sci-Fi",
        "Director": "David S. Goyer",
        "Writer": "David S. Goyer, Marv Wolfman, Gene Colan",
        "Actors": "Wesley Snipes, Kris Kristofferson, Parker Posey",
        "Plot": "Blade, now a wanted man by the FBI, must join forces with the Nightstalkers to face his most challenging enemy yet: Dracula.",
        "Language": "English, Esperanto",
        "Country": "United States",
        "Awards": "1 nomination",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0Nzg2MzI3MF5BMl5BanBnXkFtZTYwMjExODQ3._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "5.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "24%"
            },
            {
                "Source": "Metacritic",
                "Value": "38/100"
            }
        ],
        "Metascore": "38",
        "imdbRating": "5.8",
        "imdbVotes": "180,349",
        "imdbID": "tt0359013",
        "Type": "movie",
        "DVD": "26 Apr 2005",
        "BoxOffice": "$52,411,906",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Sling Blade",
        "Year": "1996",
        "Rated": "R",
        "Released": "14 Mar 1997",
        "Runtime": "135 min",
        "Genre": "Drama",
        "Director": "Billy Bob Thornton",
        "Writer": "Billy Bob Thornton",
        "Actors": "Billy Bob Thornton, Dwight Yoakam, J.T. Walsh",
        "Plot": "Karl Childers, a simple man hospitalized since his childhood murder of his mother and her lover, is released to start a new life in a small town.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 14 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzViNGMzNDMtMDFkZS00ZWZiLTk1NDgtMzFhZmYwYjQ5ODNkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.0",
        "imdbVotes": "95,040",
        "imdbID": "tt0117666",
        "Type": "movie",
        "DVD": "14 Jan 2003",
        "BoxOffice": "$24,444,121",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    }
]