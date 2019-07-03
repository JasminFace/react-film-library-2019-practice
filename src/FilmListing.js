import React from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';

const FilmListing = (props) => {

  // let allFilms = TMDB.films;
  // let titles = []
  // allFilms.forEach((film) => {
  //   titles.push(film.title)
  // })

  // let titles = []
  // TMDB.films.forEach((film) => {
  //   titles.push(<FilmDetails key={film.id} title={film.title} />)
  // })

  const filmList = TMDB.films.map((film) => {
    return <FilmRow film={film} key={film.id} />;
  })

  const handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`);
  }

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
        <div className="film-list-filter" onClick={ () => handleFilterClick("All") } >
          ALL
          <span className="section-count">{filmList.length}</span>
        </div>
      
        <div className="film-list-filter" onClick={ () => handleFilterClick("Faves")}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>

      {filmList}
    </div>
  );
}

export default FilmListing;