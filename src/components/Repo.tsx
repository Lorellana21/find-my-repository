import "../styles/components/Repo.scss";
import React, { FC } from "react";


type RepoData = {
    [key: number]: string
  }

const Repo : React.FC<RepoData> = (props: RepoData) => {
    console.log(props)



  return (
    <>
      <div className="wrapper">
        <article className="highlight">
        
          <header className="highlight__header">
            <h2 className="title size--m"></h2>
          </header>
          <main>
              <p>Description</p>
          </main>
          <footer className="highlight__footer">
          </footer>
        </article>
      </div>
    </>
  );
};


export default Repo;