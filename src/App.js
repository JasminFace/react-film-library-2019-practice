import React, {useState} from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import axios from 'axios'

const App = () => {

  const axios = require('axios')
    axios.get("localhost:8000/api/game-of-thrones/")
      .then(res => useState({data: res.data}))
  
  return (
    <main className="film-library">
      <FilmListing />
      <FilmDetails />

    </main>
  );
}

export default App;
