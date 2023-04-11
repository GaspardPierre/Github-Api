import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container} from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';


 
 export default function SearchContainer({onSearchSubmit, isLoading}) {


   return (
   <>
   < Container 
        className='container_searchbar' >
  
    < SearchBar
    onSubmit={onSearchSubmit}
    onLoad={isLoading}
    />
 
   

    
   </Container>
   </>
   );
 }
 

 SearchContainer.PropTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
 }