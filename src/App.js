import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import HomePage from './webpage/HomePage';

function App() {
  return (
    
    <div className={styles.App}>
     <NavBar/>
     <Routes>
     <Route exact path="/hello"  element={<HomePage />} />
     </Routes>
     
    </div>
  );
}

export default App;
