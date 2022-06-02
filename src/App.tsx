import { useState, useEffect } from "react";
import getApiData from "./services/getDataFromApi";
import "./styles/App.scss";
import userData from "./fixtures/user.json";
import reposData from "./fixtures/repos.json";
import User from "./components/User";
import Filter from "./components/Filter";
import RepoList from "./components/RepoList";



const App = () => {
  const [user, setUser] = useState<object>({});
  const [repos, setRepos] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getApiData().then((reposData) => {
      setRepos(reposData);
      console.log(reposData);
    });
  }, []);

  const handleFilter = (inputValue: string) => {
    setFilter(inputValue);

  };

  const filteredRepos = reposData.filter((repo) => {
    return repo.name.toLowerCase().includes(filter.toLowerCase());
  })
  console.log(filteredRepos)

  return (
    <>
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <User {...userData} />
          <Filter handleFilter={handleFilter}></Filter>
          <RepoList {...filteredRepos}></RepoList> 
        </main>
      </div>
    </>
  );
};
export default App;
