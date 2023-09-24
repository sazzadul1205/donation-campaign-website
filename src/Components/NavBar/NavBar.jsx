import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const link = <>

            <li><NavLink  to='/'>Home</NavLink></li>
            <li><NavLink to='/donation'>Donation</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="navbar lg:px-36 py-12">
                <div className="flex-1">
                    <img src="/Logo.png" alt="Website Logo" />
                </div>
                <div className="flex-none">
                    <ul className='flex gap-12 font-normal text-lg'>
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;