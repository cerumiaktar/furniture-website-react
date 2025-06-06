import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart,FiUser } from "react-icons/fi";



const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-lg rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl"><img src="https://i.ibb.co.com/gbz5MYM1/furniture-logo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3 md:space-x-4">
                    <a className="flex items-center gap-2"><FiSearch />Search</a>
                    <a className="flex items-center gap-2"><FiShoppingCart />Cart</a>
                    <Link to='/login'><a className="flex items-center gap-2"><FiUser />Account</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;