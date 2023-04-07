import React, { useState } from 'react';
import { Container} from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';
import MessageResult from '../MessageResult/MessageResult';

 
 export default function SearchContainer({onSearchSubmit, repos, isLoading}) {


   return (
   <>
   < Container 
        className='container_searchbar' >
  
    < SearchBar
    onSubmit={onSearchSubmit}
    onLoad={isLoading}
    />
    <MessageResult 
    reposNumber={repos.length}
    />
   

    
   </Container>
   </>
   );
 }
 