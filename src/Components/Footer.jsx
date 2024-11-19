import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-8 fixed bottom-0 left-0">
            <div className="container mx-auto">
                {/* Top section */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
                    {/* Column 1: About */}
                    <div>
                        <h5 className="font-semibold mb-3 mx-0">About</h5>
                        <ul className="space-y-2 mr-11 ">
                            <li><a href="#" className="hover:underline">DEI</a></li>
                            <li><a href="#" className="hover:underline">Sustainability</a></li>
                            <li><a href="#" className="hover:underline">Our leadership</a></li>
                            <li><a href="#" className="hover:underline">Featured content</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h5 className="font-semibold mb-3">Services</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Experience services</a></li>
                            <li><a href="#" className="hover:underline">Advanced engineering services</a></li>
                            <li><a href="#" className="hover:underline">Data engineering and analytics</a></li>
                            <li><a href="#" className="hover:underline">Application services</a></li>
                            <li><a href="#" className="hover:underline">Cloud, infrastructure and security services</a></li>
                            <li><a href="#" className="hover:underline">Artificial Intelligence</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Industries */}
                    <div className='ml-2'>
                        <h5 className="font-semibold mb-3">Industries</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Hi-tech Engineering</a></li>
                            <li><a href="#" className="hover:underline">Banking and Financial Services</a></li>
                            <li><a href="#" className="hover:underline">Insurance</a></li>
                            <li><a href="#" className="hover:underline">Healthcare and Life Sciences</a></li>
                            <li><a href="#" className="hover:underline">Telecom</a></li>
                            <li><a href="#" className="hover:underline">Consumer Services</a></li>
                            <li><a href="#" className="hover:underline">Manufacturing</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div className='ml-7'>
                        <h5 className="font-semibold mb-3">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Investors</a></li>
                            <li><a href="#" className="hover:underline">Partners</a></li>
                            <li><a href="#" className="hover:underline">Business insights</a></li>
                            <li><a href="#" className="hover:underline">PR and News</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Careers */}
                    <div className='ml-6'>
                        <h5 className="font-semibold mb-3">Careers</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Job opportunities</a></li>
                            <li><a href="#" className="hover:underline">Life @ Zensar</a></li>
                        </ul>
                    </div>

                    {/* Column 6: Contact */}
                    <div className='ml-12'>
                        <h5 className="font-semibold mb-3">Contact</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Middle section */}
                <div className="flex justify-flex-end ml-10 space-x-4 mb-4 text-sm">
                    <a href="#" className="hover:underline">INDIA</a>
                    <a href="#" className="hover:underline">US</a>
                    <a href="#" className="hover:underline">UK</a>
                    <a href="#" className="hover:underline">South Africa</a>
                </div>

                <div className="flex justify-center space-x-4 text-xs mb-6">
                    <a href="#" className="hover:underline">Human rights policy</a>
                    <a href="#" className="hover:underline">DEI policy</a>
                    <a href="#" className="hover:underline">Gender pay gap report</a>
                    <a href="#" className="hover:underline">Stakeholder engagement policy</a>
                    <a href="#" className="hover:underline">Grievance redressal policy</a>
                    <a href="#" className="hover:underline">Sustainable procurement policy</a>
                    <a href="#" className="hover:underline">Modern slavery statement</a>
                    <a href="#" className="hover:underline">Cookie policy</a>
                    <a href="#" className="hover:underline">Privacy notice</a>
                    <a href="#" className="hover:underline">Disclaimer</a>
                    <a href="#" className="hover:underline">Sitemap</a>
                </div>

                {/* Bottom section */}
                <div className="flex justify-between items-center">
                    {/* Social icons */}
                    <div className="flex space-x-4">
                        <FaLinkedin />
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                        <FaGoogle />
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-400">
                        © 2003-2024 Zensar Technologies Ltd. CIN:L72200PN1963PLC012621. All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
