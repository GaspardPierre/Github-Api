import React, { FC, FunctionComponent, useState } from 'react';
import { Container} from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';

interface SearchContainerProps {
  onSearchSubmit: (searchTerm: string) => void;
  isLoading: boolean;
}
 
 const SearchContainer : FunctionComponent < SearchContainerProps >  =   ({onSearchSubmit, isLoading}) => {


   return (
   <>
   < Container 
        className='container_searchbar' >
  
    < SearchBar
    onSubmit={onSearchSubmit}
    onLoad ={isLoading}
    />
 
   

    
   </Container>
   </>
   );
 }
 
export default SearchContainer;
