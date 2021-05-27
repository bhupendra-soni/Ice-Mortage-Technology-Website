import React from 'react';
import './Footup.css';

const Footup = () => {
    return (
        <div>
            <div id="footer-cta" className="bg-dark-blue text-white text-center fs20" style={{backgroundColor: '#0a649c'}}>
    <div id="demo-desktop" className="hidden-sm hidden-xs">
        <img src="https://www.icemortgagetechnology.com/assets/images/pro-services/red-roof.png" />
        <span>See our Digital Mortgage Solution</span>
        <a href="/request-demo" className="btn" style={{padding:'12px 30px', backgroundColor: '#f37f0f', color:'white', marginLeft: '6%' }} onclick="dataLayer.push({
							'event':'trackEvent',
							'eventCategory':'promo',
							'eventAction':'elliemae:16a76aa543694933811a7b957757e15e - click',
							'eventLabel':'/request-demo',
							'creative':'request free demo',
							'nonInteraction': false
							});">
            Request free demo
        </a>
    </div>

    <div id="demo-mobile" className="hidden-lg hidden-md">
        <a href="/digital-lending-platform" onclick="dataLayer.push({
							'event':'trackEvent',
							'eventCategory':'promo',
							'eventAction':'elliemae:16a76aa543694933811a7b957757e15e - click',
							'eventLabel':'/digital-lending-platform',
							'creative':'elliemae® digital lending platform',
							'nonInteraction': false
							});">
            <img src="https://www.icemortgagetechnology.com/assets/images/pro-services/red-roof.png" alt="" style={{display: 'none'}} />
            <i className="fa fa-arrow-right text-orange"></i>
        </a>
    </div>
</div>
        </div>
    );
};

export default Footup;
