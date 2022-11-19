import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import HomePage from './webpage/HomePage';
import MovieDetail from './webpage/MovieDetail';
import Movies from './webpage/Movies';
import Music from './webpage/Music';

function App() {
  return (
    
    <div className={styles.App}>
     <NavBar/>
     <Routes>
     <Route exact path="/"  element={<HomePage />} />
     <Route exact path="/music"  element={<Music />} />
     <Route exact path="/movies"  element={<Movies />} />
     <Route exact path="/moviedetails/:id"  element={<MovieDetail />} />
     </Routes>
     
    </div>
  );
}

export default App;
