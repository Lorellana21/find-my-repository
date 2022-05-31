
import { useState, useEffect } from 'react';
import getApiData from "../src/services/getDataFromApi";
import "./styles/App.scss";
//import data from "./fixtures/user.json";
import User from "./components/User";


let name: string;
let age: number | string;//a union
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; //role= [5, "edad"]

type Person = {
  name: string;
  age?: number;
}
let person: Object;//no recomendada
function printName(name: string){
  console.log(name)
}
printName("lore");
let printNombre: (name: string) => void;

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
    <>
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
    </>
  );
}

export default App;
