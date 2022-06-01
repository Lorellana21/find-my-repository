
import { useState, useEffect } from 'react';
import getApiData from "./services/getDataFromApi";
import "./styles/App.scss";
import userData from "./fixtures/user.json";
import reposData from "./fixtures/repos.json";
import User from "./components/User";


// interface UserData  {
//   name: string
//   login: string
//   bio: string
//   avatar_url: string
//   location: string
//   followers: number
//   following: number
// }

const App = () => {
  
  const [user, setUser] = useState<object>({})
  const [repos, setRepos] = useState(reposData);
  const [filterName, setFilterName] = useState<string>("");


  
useEffect(() => {
    getApiData().then((reposData) => {
      setRepos(reposData);
      console.log(reposData)
    });
}, []);

  return (
    <>
    <div className="container">
      <header className="App-header">
        
      </header>
      <main>
      
        <User {...userData}/>
        
        <p>holaaaaa</p>

      
        
        
      </main>
    </div>
    </>
  );
}

export default App;
