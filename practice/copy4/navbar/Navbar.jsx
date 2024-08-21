import React from 'react'

function Navbar() {
  return (
    
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <a href='#' className='navbar-brand'>React Component</a>
        <div className='ml-auto'>
        <ul className='navbar-nav'>
          <li className='nav-list'>
            <a className='nav-link' href='#'>home</a></li>
          <li className='nav-list'>
            <a className='nav-link' href='#'>about</a></li>
          <li className='nav-list'>      
            <a className='nav-link' href='#'>contact</a>
          </li>
        </ul>
        </div>
      </nav>
    
  )
}

export default Navbar



