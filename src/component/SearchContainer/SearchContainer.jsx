import React from 'react';
import { Container} from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';

 
 export default function SearchContainer() {
   return (
   <>
   < Container 
        className='container_searchbar' >
  
    <SearchBar
    />

    
   </Container>
   </>
   );
 }
 