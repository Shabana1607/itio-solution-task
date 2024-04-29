import React, { useState } from "react";
import {MoviesData} from "../data/movieData"
import FilterButton from "../filter";
const MovieCard = () => {
  const data = MoviesData;
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // Get unique values for each filter
  const genres = Array.from(new Set(data.flatMap((movie) => movie.moviegenres)));
  const languages = Array.from(new Set(data.flatMap((movie) => movie.movielanguages)));
  const countries = Array.from(new Set(data.flatMap((movie) => movie.moviecountries)));

 
  // Function to filter movies based on selected filters
  const filteredMovies = data.filter((movie) => {
    // Filter by genre
    if (selectedGenre && !movie.moviegenres.includes(selectedGenre)) {
      return false;
    }
    // Filter by language
    if (selectedLanguage && !movie.movielanguages.includes(selectedLanguage)) {
      return false;
    }
    // Filter by country
    if (selectedCountry && !movie.moviecountries.includes(selectedCountry)) {
      return false;
    }
    return true;
  });

    console.log(filteredMovies)
  return (
      <div className="body-container">
          <h1>Movies List</h1>
      {/* Filter dropdowns */}
          <div className="filter">
              <h4>Filter By:</h4>
              <FilterButton
        options={genres}
        selectedFilter={selectedGenre}
        setSelectedFilter={setSelectedGenre}
        label="Genres"
      />
      <FilterButton
        options={languages}
        selectedFilter={selectedLanguage}
        setSelectedFilter={setSelectedLanguage}
        label="Language"
      />
      <FilterButton
        options={countries}
        selectedFilter={selectedCountry}
        setSelectedFilter={setSelectedCountry}
        label="Country"
      />
      </div>

      {/* Movie cards */}
      <div className="movie-container">
        {filteredMovies?.map((movie, index) => (
          <div className="container" key={index}>
            {/* Render movie details */}
            <img src={movie.moviemainphotos} alt={movie.movietitle} className="container_img" />
            <div className="data">
              <h2 className="data_name">{movie.movietitle}</h2>
              <div className="movie-item">IMDB ID: <span>{movie.imdbmovieid}</span></div>
              <div className="movie-item">Movie Genres: <span>{movie.moviegenres.join(", ")}</span></div>
              <div className="movie-item">Language: <span>{movie.movielanguages.join(", ")}</span></div>
              {/* {movie.moviecountries.length<=10?<div>Countries: <span>{movie.moviecountries.slice(0,10).join(", ") || "India"}</span></div>:<div>Countries: <span>{movie.moviecountries.slice(9).join(", ") || "India"}</span></div>} */}
              {/* <div>Countries: <span>{movie.moviecountries.join(", ") || "India"}</span></div> */}
               <hr className="seperator"/>
               <div className={`tooltip-container`}>
  <div className="tooltip">
    <div>
      Country: <span>{movie.moviecountries.slice(0, 10).join(", ") || "India"}</span>
    </div>
    {movie.moviecountries.length > 10 && (
      <div className="tooltip-text">
        Remaining: <span>{movie.moviecountries.slice(10).join(", ")}</span>
      </div>
    )}
  </div>
</div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
