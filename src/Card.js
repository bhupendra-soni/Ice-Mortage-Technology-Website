import React from 'react'
import {Card, Container, Row, Col } from 'react-bootstrap';


const Upcard = () => {
    return (
        <div>
                 <section id="hm-channel" className="bg-light-sky-20" style={{padding: '3%'}}>
                 <div className="container-fluid mb-2 mt-1">

                <Row >
                    <Col>
                        <Card className="cardup" style={{ height: '170px', width: '290px'}}>

                            <div className="az-heading">
                                <i className="ikon ikon-urla-heart ikon-sm" style={{ display: 'block', width: '100%' }}>
                                </i>
                                <h3 className="fs18 text-sapphire">Are you ready for the new URLA?</h3>
                                <h5 className="text-azure">Learn more</h5>
                            </div>

                        </Card>
                    </Col>

                    <Col>
                        <Card className="cardup" style={{ height: '170px', width: '290px'}}>

                            <div className="az-heading">
                                <i className="ikon ikon-marketing-automation ikon-sm" style={{ display: 'block', width: '100%' }}>
                                </i>
                                <h3 className="fs18 text-sapphire">Make more informed decisions with Insights™</h3>
                                <h5 className="text-azure">Learn more</h5>
                            </div>

                        </Card>
                    </Col>

                    <Col>
                        <Card className="cardup" style={{ height: '170px', width: '290px'}}>

                            <div className="az-heading">
                                <i className="ikon ikon-efolder ikon-sm" style={{ display: 'block', width: '100%' }}>
                                </i>
                                <h3 className="fs18 text-sapphire">Encompass eClose is here!</h3>
                                <h5 className="text-azure">See a demo to learn more</h5>
                            </div>

                        </Card>
                    </Col>

                    <Col>
                        <Card className="cardup" style={{ height: '170px', width: '290px'}}>

                            <div className="az-heading">
                                <i className="ikon ikon-webinars ikon-sm" style={{ display: 'block', width: '100%' }}>
                                </i>
                                <h3 className="fs18 text-sapphire">Get virtual training with the experts, wherever you are</h3>
                                <h5 className="text-azure">Learn more</h5>
                            </div>

                        </Card>
                    </Col>

                </Row>

            </div>
            </section>
        </div>
    );
};

export default Upcard;
