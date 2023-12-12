import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <Link to='/TO-DO-APP'>Home</Link>
                <Link to='/about'>About</Link>

            </header>
        </div >
    )
}

export default Header