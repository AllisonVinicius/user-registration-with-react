import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <aside className='menu-area'>
            <nav className='menu'>
                <a href='/'>
                    <i className='fa fa-home'></i>
                    Inicio
                </a>
                <a href='#/users'>
                    <i className='fa fa-users'></i>
                    Usuários
                </a>
            </nav>
        
        </aside>

    )
};
export default Navbar;