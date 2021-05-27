import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <section className="az-hero-banner">
                    <div className="row az-media">
                        <div className="col az-media__content">
                            <h1>Encompass® eClose is here.</h1>
                            <p>ICE Mortgage Technology is changing how mortgages are closed in the U.S. with the industry’s first true end-to-end eClosing solution. Facilitate every aspect of your closing process in the solution you already know, with one underlying data source. Request a demo to connect with an expert today!</p>
                            <p>
                                <a class="btn btn-52 bg-azure" href="//creative.elliemae.com/az104?token=fd0dfdea-8430-4140-80d1-270063e2dea5">Request free demo</a>
                            </p>
                        </div>
                        <div className="col az-media__img" style={{backgroundImage: `url("https://images.contentstack.io/v3/assets/blt93192b1072ac562d/blt0801cffb4b026663/608d6bfef871471012bde8c6/eClose_Overview_Image.png")`}}>
                           
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Banner;
