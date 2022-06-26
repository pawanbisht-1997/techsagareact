import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaMailBulk, FaPhoneAlt, FaMapMarkerAlt} from 'react-icons/fa';
import {
    Link
  } from "react-router-dom";

const sidebar = () => {
        const bar = document.getElementById("sidebar");
        console.log(bar);
        if (bar.style.left === `0px`) {
            bar.style.left = `-100%`;
        }
        else {
            bar.style.left = `0px`;
        }
    }  
const Header = () => {
    return (
        <>
            <div className="main-header">
                {/* <!-- top bar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="flex align-center spce-btwn">
                            <div className="flex align-center">
                                <div className="phon-number flex  align-center">
                                    <FaPhoneAlt />
                                    <p>(+880) 1234567890</p>
                                </div>
                                <div className="mail flex  align-center"> 
                                    <FaMailBulk />
                                    <p>rockyhills@gmail.com</p>
                                </div>
                            </div>
                            <div className="address flex  align-center">
                                <FaMapMarkerAlt />
                                <p>631, Allen Drive Goodlettsville Tennessee, 37072, United State</p>
                            </div>
                            <div className="social-sections">
                                <a href="/"><FaFacebookF /></a>
                                <a href="/"><FaLinkedinIn /></a>
                                <a href="/"><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- header --> */}
                <header>
                    <div className="container">
                        <div className="flex spce-btwn align-center">
                            <div className="logo">
                                <img src="./Assets/img/logo-tech.png" alt="logo" className="img-fluid" />
                            </div>
                            <div className="menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li className="dropdown"><Link to="/service">Servces</Link>
                                        <div className="submenu">
                                            <div className="flex">
                                                <ul>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                    <li><a href="/">Agile transformation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/industries">Industries</Link></li>
                                    <li><Link to="/MainBlog">Blog</Link></li>
                                    <li><Link to="/maincontact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="sidebar-btn" onClick={() => sidebar()}>
                                <img src="./Assets/img/sidebar.PNG" alt="sidebar" />
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- siderbar --> */}
            </div>
            {/* <!-- siderbar --> */}
           <div className="Minsidebar">
           <section className="sidebar" id="sidebar">
                <div className="sidebar-logo">
                    <img src="./Assets/img/logo-tech.png" alt="logo" />
                </div>
                <div className="sidebar-des">
                    <p>Techsaga Corporation is incorporated on the foundation of a multidisciplinary team inherited with a proven track record and eminent talent. In the herd of our fellow strategists, designers, and innovators, we are accountable for the client's delight and exceeded expectations.</p>
                </div>
                <div className="sidebar-contact">
                    <ul>
                        <li>
                            <FaMapMarkerAlt />
                            <p>106, Anniversary Avenue, Wyndham Vale - 3024. Victoria, Australia</p>
                        </li>
                        <li>
                            <FaPhoneAlt />
                            <p>+61412411283</p>
                        </li>
                        <li>
                            <FaMailBulk />
                            <p>info@techsaga.com.au</p>
                        </li>
                    </ul>

                </div>
                <div className="social-box">
                 <a href="/"><FaFacebookF /></a>
                 <a href="/"><FaLinkedinIn /></a>
                 <a href="/"><FaTwitter /></a>
                </div>
            </section>
           </div>
        </>
    )
}
export default Header;

