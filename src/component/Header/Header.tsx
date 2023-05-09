import React ,{ FunctionComponent} from 'react'
import { Icon } from 'semantic-ui-react'

const Header : FunctionComponent = () =>{
  return (
    <div
    className='logo_container'>
      
        < Icon name='github'
         size='huge'
         className='logo'/>

    </div>
  )
}

export default Header;
