import React, { useState } from 'react';
import { Container} from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';
import MessageResult from '../MessageResult/MessageResult';

 
 export default function SearchContainer() {

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
   <>
   < Container 
        className='container_searchbar' >
  
    < SearchBar
    onSubmit={handleSearchSubmit}
    onLoad={isLoading}
    />
    <MessageResult 
    reposNumber={repos.length}
    />
   

    
   </Container>
   </>
   );
 }
 