import React from 'react'
import { Grid, Message } from 'semantic-ui-react'


export default function MessageResult({reposNumber}) {
  return (
   <div
   className='message_container'>

     < Message
     header="Résultat de la recherche"
     content= {`La recherche a donné ${reposNumber} résultats.`}
     className='message'
    
   />
   </div>
    
  )
}

