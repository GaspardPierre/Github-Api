import React from 'react'
import {  Input,Segment } from "semantic-ui-react";
import "./SearchBar.css"

export default function SearchBar() {
  return (
    < Segment textAlign="center" basic>

      < Input icon ="search"
       placeholder="Search..."
       className="searchbar" />
    </Segment>

  
  )
}
