import React from "react";
import SearchContainer from "../Searchcontainer/SearchContainer";
import MessageResult from "../Message/Message";
import "./App.css";
import RepoResult from "../ReposResult/RepoResult";
import Header from "../Header/Header";

export default function App() {
  return (
    <div className="App__container">
      <main className="main__github__container">
        <Header />
        <SearchContainer />
        <MessageResult />
        <RepoResult />
      </main>
    </div>
  );
}
