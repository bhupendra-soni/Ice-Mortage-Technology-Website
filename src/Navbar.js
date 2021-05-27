import React from 'react';
// import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Navbar } from 'react-bootstrap';
import './index.css';
import './Navbar3.css';
import { Button } from 'bootstrap';

const Nav = () => {
    return (
        <>
            <div className="container-fluid">
                <header id="top-nav" className="new affix">
                    <div className="navbar navbar-default" role="navigation">

                        <div className="navbar-header">
                            <a className="navbar-brand" >
                                <img src="https://static.elliemae.com/images/logos/ice-mt-tag.svg" width="300"></img>
                            </a>
                        </div>
                        <div class="pdfcrowd-remove pull-right navbar-btn visible-lg-block">
                            <a class="btn bg-white text-dark-gray px12 pl25" href="/login" onclick="dataLayer.push({'event':'trackEvent','eventCategory':'cta', 'eventAction':'Product Login', 'eventLabel':'/login'});">
                                <span class="frutiger-roman" style={{color:'#5d5f63'}}><b>Product Login</b></span>
                            </a>
                            <span class="navbar-break">|</span>
                            <a class="btn" href="https://marketplace.elliemae.com/s?utm_medium=website-header;utm_source=elliemae.com" target="_blank" onclick="dataLayer.push({'event':'trackEvent','eventCategory':'cta', 'eventAction':'Marketplace', 'eventLabel':'https://marketplace.elliemae.com/s?utm_medium=website-header&amp;utm_source=elliemae.com'});">
                                <span class="frutiger-roman" style={{color:'#5d5f63'}}><b>Marketplace</b></span>
                            </a>
                            
                            <a href="/request-demo" class="btn btn-default btn-52" onclick="window.dataLayer.push({'event':'trackEvent','eventCategory':'cta', 'eventAction':'request free demo', 'eventLabel':'/request-demo','nonInteraction': false});">
                                <button className="btn btn-lg" style={{backgroundColor: '#f37f0f', color:'white'}}>Request free demo</button>
                            </a>
                        </div>
                        
                    </div>
                    </header>
                </div>

                <div className="col-12 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#"><b>Solutions</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>Servises & support</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>Education & certificate</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>Customer</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>Partners</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>Developers</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>Resources</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>Company</b></a>
                                    </li>
                                </ul>
                            </div>
                            <span style={{ float: 'right', color:'#00adda', width: '50px', innerHeight: '50px' }} className="nav-item">
                                <AiOutlineSearch />
                            </span>
                        </div>
                    </nav>
                </div>
            
        </>
    );
};

export default Nav;
