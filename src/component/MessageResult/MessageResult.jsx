import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Message } from 'semantic-ui-react'


export default function MessageResult({reposNumber}) {
  const repos = useSelector((state) => state.repos.repos);
  return (
    repos.length === 0? null :(
   <div
   className='message_container'>

     < Message
     header="Résultat de la recherche"
     content= {`La recherche a donné ${reposNumber} résultats.`}
     className='message'
    
   />
   </div>
    
  )

)}
