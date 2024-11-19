import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/zensar.png'

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center py-1">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-semibold text-gray-800">
                            <img src={logo} alt="Company Logo" className="w-13" />
                        </a>
                    </div>

                    {/* Navbar Links */}
                    <div className="hidden md:flex space-x-8 ml-14 mr-2">
                        <a href="#services" className="text-gray-600 hover:text-gray-900">
                            Services
                        </a>
                        <a href="#industries" className="text-gray-600 hover:text-gray-900">
                            Industries
                        </a>
                        <a href="#insight" className="text-gray-600 hover:text-gray-900">
                            Insight
                        </a>
                        <a href="#people" className="text-gray-600 hover:text-gray-900">
                            People
                        </a>
                        <a href="#about" className="text-gray-600 hover:text-gray-900">
                            About Zensar
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </a>
                    </div>

                    {/* Search Icon */}
                    <div className="hidden md:flex items-center">
                        <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <a href="#services" className="block text-gray-600 hover:text-gray-900 py-2">
                        Services
                    </a>
                    <a href="#industries" className="block text-gray-600 hover:text-gray-900 py-2">
                        Industries
                    </a>
                    <a href="#insight" className="block text-gray-600 hover:text-gray-900 py-2">
                        Insight
                    </a>
                    <a href="#people" className="block text-gray-600 hover:text-gray-900 py-2">
                        People
                    </a>
                    <a href="#about" className="block text-gray-600 hover:text-gray-900 py-2">
                        About Zensar
                    </a>
                    <a href="#contact" className="block text-gray-600 hover:text-gray-900 py-2">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
