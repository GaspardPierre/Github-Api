import React from 'react';
import { RootState,  AppDispatch } from '../../store/store'
import { useSelector , useDispatch} from 'react-redux';
import { fetchRepos } from '../../store/repoSlice';
import SearchContainer from '../SearchContainer/SearchContainer';
import RepoResult from '../ReposResult/RepoResult';
import Header from '../Header/Header';
import { Repo } from '../../types/type';
import './App.css';





export default function App() {

  const repos  : Repo[] = useSelector((state : RootState) => state.repos.repos);
  console.log(repos)
  const isLoading : boolean = useSelector((state : RootState) => state.repos.isLoading);
  const dispatch : AppDispatch = useDispatch();

  const handleSearchSubmit =(search :string) => {
    dispatch(fetchRepos(search));
  }

  return (
    <div className="App__container">
      <main className="main__github__container">
        <Header />
        <SearchContainer onSearchSubmit={handleSearchSubmit}
       
        isLoading={isLoading} />
        <RepoResult 
        repos={repos} 
        />
      </main>
    </div>
  );
}
