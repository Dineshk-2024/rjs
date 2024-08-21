import React from 'react'

class Navbar extends React.Component {
  render() {
    return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'> 
    <a href='#' className='navbar-brand'>ReactComponent</a> 
        <div className='ml-auto'>
        
        <ul className='navbar-nav'>
       <li className='nav-list'> <a href='#' className='nav-link'>HOME</a></li>
       <li className='nav-list'> <a href='#' className='nav-link'>ABOUT</a></li>
       <li className='nav-list'> <a href='#' className='nav-link'>CONTACT</a></li>
        </ul>
      </div>
      </nav>
    
  }
}

export default Navbar
