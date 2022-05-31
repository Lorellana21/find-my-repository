
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
    <div className="container">
      <header className="App-header">
        
      </header>
      <main>
        <User></User>
        <div className='wrapper'>


        {/* navbar
        filter
        <ReposList></ReposList>
        <RepoItem></RepoItem> */}
        </div>
      </main>
    </div>
  );
}

export default App;

//https://api.github.com/users