
import { useState, useEffect } from 'react';
import getApiData from "../src/services/getDataFromApi";
import "./styles/App.scss";
import data from "./fixtures/user.json";
import User from './components/User';


const App = () => {

  const [user, setUser] = useState([]);
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
        
      </header>
      <main>
        <User></User>
      </main>
    </div>
  );
}

export default App;

//https://api.github.com/users