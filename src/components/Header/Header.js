import React from 'react'
import './Header.css';
function Header() {
  return (
    <div className='header-conteiner'>
        <div className='logo-content'>
            <p className='logo'>Your<br/>Weather</p>
            <div className='line'>
                <p className='text-logo'>Weather in your city</p>
            </div>
        </div>
        <div className='language-content'>
            <p className='text-language'>EN</p>
        </div>
    </div>
  )
}

export default Header