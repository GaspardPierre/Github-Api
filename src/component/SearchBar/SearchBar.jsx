import React, { useState} from 'react'
import {  Input,Segment, Loader } from "semantic-ui-react";
import PropTypes from 'prop-types';

import "./SearchBar.css"

export default function SearchBar( { onSubmit,onLoad}) {
  const [search, setSearch] = useState('');

  const handleOnChange =(event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(search);
    setSearch('');
    
  }
  return (
    < Segment textAlign="center" basic>
         <form onSubmit={handleSubmit}>
    

      < Input icon ="search"
       placeholder="Search..."
       className="searchbar"
       value= { search}
       onChange={handleOnChange} />
          {onLoad && <Loader active inline='left' />}
      
       </form>
    </Segment>

  
  );
}

SearchBar.prototypes ={
  onSubmit: PropTypes.func.isRequired,
  onLoad: PropTypes.bool.isRequired,

}