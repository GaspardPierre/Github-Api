import React, { ChangeEvent, FunctionComponent, FormEvent, useState} from 'react'
import {  Input,Segment, Loader } from "semantic-ui-react";
import "./SearchBar.css"

interface  SearchBarProps {
  onSubmit: (search: string) => void;
  onLoad: boolean;  
}
const SearchBar :   FunctionComponent < SearchBarProps > = ( { onSubmit,onLoad }) => {
  const [search, setSearch] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event : FormEvent< HTMLFormElement>) => {
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

