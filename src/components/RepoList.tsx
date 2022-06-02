import Repo from "./Repo";
import "../styles/components/RepoList.scss";
import React, { FC } from "react";


export type FilteredRepos = {
    name: string;
    visibility: string;
    url: string;
    updated: string;
    language: string;
    description: string;
    stargazers: string;
    forks: number;
  }


const RepoList: React.FC<FilteredRepos> = (props:FilteredRepos) => {
    console.log("props",props)

    // const repoItems = props.filteredRepos.map((repo: any, id: any) => {
    //   return (
    //     <li key={id} className="repo__list">
    //       <Repo {...repo}/>
    //     </li>
    //   );
    // });
  
    return (
    <>
    <ul className="repo__list"></ul>
    <Repo {...props}/>
    </>
    )
  };
  
  export default RepoList;