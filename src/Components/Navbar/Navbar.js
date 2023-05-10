import React from 'react'
import "./Navbar.css"
import Link from '../Link/Link'

const Navbar = () => {

  const links = [{id:1, name:"home"}, {id:2, name:"about"}, {id:3, name:"product"}, {id:4, name:"contact us"}]
  return (
    
    <div>
      <nav>
        <div><img src='./Exlogo.png' alt='logo' /></div>
        <div className='links'>{links.map(link => <Link className='link-text' key={link.id} name = {link.name}/>)}</div>
      </nav>
    
    </div>

    
    
  )
}

export default Navbar