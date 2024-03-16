import React, { useState } from 'react';
import './Navbar.css';
import { FaOpencart } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import pageLogo from "../../../Images/png/17201701.png";
import { BsTelephone } from "react-icons/bs";
//import { useNavigate } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search submission logic here
        console.log('Search submitted:', searchTerm);
    };

    // const navigate = useNavigate();

    //   const handleNavigation = () => {
    //     navigate = '';
    //   }

    return (
        <div className='Navbar'>
            <div className='nav-content'>
                <div className='contact-info'>
                    <div className='contact-no'>
                        <a><div className='tele-icon'><BsTelephone /></div>+001234567890</a>
                    </div>
                    <div className='info-a'>
                        <div className='discount-info'>
                            <a>Get 50% Off on Selected Items</a>
                        </div>
                        <div className='straight'>
                            <a>|</a>
                        </div>
                        <div className='shop-info'>
                            <a>Shop Now</a>
                        </div>
                    </div>
                    <div className='info-b'>
                        <div className='language-info'>
                            <a>Eng</a>
                        </div>
                        <div className='location-info'>
                            <a>Location</a>
                        </div>
                    </div>

                </div>
                <div className='real-content'>
                    <a><img src={pageLogo} alt='' height="100px" width="100px" /></a>

                    <div className='nav-links'>
                        <nav>
                            <ul>
                                <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}><a href='#'>Categories</a>
                                    {isDropdownOpen && (
                                        <div className='dropdown-content'>
                                            <a href='#'>Furniture</a>
                                            <a href='#'>Bag</a>
                                            <a href='#'>Shoe</a>
                                            <a href='#'>Headphone</a>
                                            <a href='#'>Book</a>
                                            <a href='#'>Laptop</a>
                                        </div>
                                    )}
                                </li>

                                <li><a href='#'>Deals</a></li>
                                <li><a href='#'>What's New</a></li>
                                <li><a href='#'>Delivery</a></li>
                                <form onSubmit={handleSearchSubmit} className='search-form'>
                                    <input
                                        type='text'
                                        placeholder='Search Product'
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <div className='search-icon'>
                                        <IoSearchOutline type='submit' />
                                    </div>
                                </form>
                                <li><a href='#'><div className='account-icon'><RxPerson /></div>Account</a></li>
                                <li><a href='#'><div className='cart-icon'><FaOpencart /></div>Cart</a></li>
                            </ul>


                        </nav>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Navbar