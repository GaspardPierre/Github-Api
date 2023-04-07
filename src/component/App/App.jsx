import {React, useState } from 'react';

import SearchContainer from '../SearchContainer/SearchContainer';
import RepoResult from '../ReposResult/RepoResult';
import Header from "../Header/Header";
import "./App.css";

export default function App() {
  const [repos, setRepos ] = useState ([]);
const [isLoading, setIsLoading ] = useState(false);

  const handleSearchSubmit = async  (search) => {
   setIsLoading(true);

   try {
    const response = await fetch (`https://api.github.com/search/repositories?q=${search}`);
    const reposData = await response.json();
    console.log(reposData);
    setRepos(reposData.items);
    
   }catch(error){

    console.log("Erreur :", error);

   }
   setIsLoading(false)
  };
  return (
    <div className="App__container">
      <main className="main__github__container">
        <Header />
        <SearchContainer onSearchSubmit={handleSearchSubmit}
        repos={repos}
        isLoading={isLoading} />
        <RepoResult 
        repos={repos} 
        />
      </main>
    </div>
  );
}
