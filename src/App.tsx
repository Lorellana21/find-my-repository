
import { useState, useEffect } from 'react';
import getApiData from "../src/services/getDataFromApi";
import './App.css';


const App = () => {

  const [repos, setRepos] = useState([]);
  const [filterName, setFilterName] = useState("");

  
useEffect(() => {
    getApiData().then((reposData) => {
      setRepos(reposData);
      console.log(reposData)
    });
}, []);





  return (
    <div className="App">
      <header className="App-header">
        
        <p>Hola
        </p>
        
      </header>
    </div>
  );
}

export default App;

//https://api.github.com/users