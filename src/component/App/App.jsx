import {React, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { fetchRepos } from "../../store/repoSlice";
import SearchContainer from '../SearchContainer/SearchContainer';
import RepoResult from '../ReposResult/RepoResult';
import Header from "../Header/Header";
import "./App.css";

export default function App() {

  const repos = useSelector((state) => state.repos.repos);
  console.log(repos)
  const isLoading = useSelector((state) => state.repos.isLoading);
  const dispatch = useDispatch();

  const handleSearchSubmit =(search) => {
    dispatch(fetchRepos(search));
  }

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
