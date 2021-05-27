import React from 'react';

const Bottom = () => {
    return (
        <div>
           <section id="hm-bottom-line" className="py48">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="max-lg-740">
            <img align="right" className="visible-lg visible-md visible-sm" src="https://www.icemortgagetechnology.com/images/home/roi-cards-graphic.png" srcset="/images/home/roi-cards-graphic@2x.png 2x, /images/home/roi-cards-graphic@3x.png 3x" alt="The bottom line" />
            {/* <img className="img-responsive hidden-lg hidden-md hidden-sm" src="/images/home/roi-stats.png" srcset="/images/home/roi-stats@2x.png 2x, /images/home/roi-stats@3x.png 3x" alt="The bottom line" /> */}
          </div>
        </div>
        
          <div className="col-5" style={{marginLeft: '6%'}}>
            <h3 className="fs36 mt20 text-dark-blue">The bottom line</h3>
            <p className="fs20 text-sapphire-80">Game-changing ROI that beats the averages</p>
            <p>The mortgage industry’s average loan origination cost is $8,957, primarily attributed to many lenders not using a tightly integrated, all-in-one solution. ICE Mortgage Technology customers substantially reduce these costs by leveraging a single system of record. As a result, they save an average of $813 per loan, and close those loans seven days faster. This equates to an average annual <span className="nowrap">ROI of 698%.</span></p>
            <p><a className="btn btn-52 bg-azure" href="/digital-lending-platform">ICE Mortgage Technology Platform</a></p>
          </div>
        </div>
      </div>

  </section> 
        </div>
    );
};

export default Bottom;
