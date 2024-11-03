import React, { useState } from 'react'
import { navLinks } from '../constants';

export default function Navbar() {
    const [isOpen, setIsopen] = useState(false);

    const NavItems = () => {
        return (
            <ul className='nav-ul'>
                {navLinks.map(({ id, href, name }) => (
                    <li key={id} className='nav-li'>
                        <a href={href} className='nav-li_a' onClick={() => {}}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    const toggleMenu = () => {
        setIsopen((prevIsOpen) => !prevIsOpen);
    }
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Abhay
                    </a>
                    <button onClick={toggleMenu} className='focus:outline-none sm:hidden flex' aria-label='Toggle Menu'>
                        <i className={`${isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} w-6 h-6 text-neutral-400 hover:text-white`}></i>
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className='p-5'>
                    <NavItems />
                </div>
            </div>
        </header>
    )
}
