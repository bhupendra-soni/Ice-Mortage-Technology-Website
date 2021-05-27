import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

const Vedio = () => {
    return (
        <div>
            <section id="hm-video-testimonials" className="pt20 bg-lawn-80 " >
    <div className="container">
      <div className="row" >
        <div className="col-lg-6 col-lg-push-6 col-lg-offset-0 col-md-8 col-md-offset-2" style={{marginBottom: '5%'}}>
          <div className="max-lg-740">
            <div className="outer_vidyard_wrapper -mt80 mb30">
              <div className="vidyard_wrapper" onclick="fn_vidyard_qmXz3RvE25TTDHG8e1dLEs();">
                  <iframe style={{ width:'550px', height:'350px'}}  src="https://www.youtube.com/embed/IpwVTPvdx8U" />

                <a href="javascript:void(0);" className="video-play play-btn-large">
                  {/* <img src="https//play.vidyard.com/qTqDaRxv5hBfzKpp6StChk.jpg?" className="img-responsive" width="150" alt="SVP, Administration, Prosperity Home Mortgage"></img> */}
                </a>
              </div>
            </div>
            <script type="text/javascript" id="vidyard_embed_code_qmXz3RvE25TTDHG8e1dLEs" src="//play.vidyard.com/qmXz3RvE25TTDHG8e1dLEs.js?v=3.1.1&amp;type=lightbox"></script>
          </div>
        </div>

        <div style={{marginLeft: '12%', marginBottom: '5%'}} className="col-lg-4 col-lg-pull-6 col-lg-offset-1 col-md-8 col-md-offset-2 pt40 pr40">
          <div className="max-lg-740">
            <p className="fs20 mb40">“We loved the fact that Encompass is an all-in-one system, along with already being partnered with AllRegs®. The system gives everyone from the loan officer to the closer total visibility into the loan file and where it is in the process.”</p>
            <p className="fs16 mb5"><strong>Annette Uleman</strong></p>
            <p className="fs14">Mortgage Processor, Operations Manager, American National Bank</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="back to top" class="text-center bg-lawn-80" >
      <a href="#hm-main">
      <FaArrowAltCircleUp width="50px" />
      </a>
  </div>
        </div>
    );
};

export default Vedio;
