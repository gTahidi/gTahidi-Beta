import React from 'react';

function HowItWorks() {
    return (
        <section className="how-it-works section-padding" data-scroll-index="2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>how it <span>works</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="how-it-works-item line-right">
                            <div className="step">1</div>
                            <h3>Input Requirements</h3>
                            <p>Specify your Topic, Sub-topic, Grade & Lesson Duration to tailor the lesson to your needs.</p>
                        </div>
                    </div>
                    {/* ... continue similarly for other columns ... */}
                    <div className="col-lg-3 col-md-6">
                        <div className="how-it-works-item">
                            <div className="step">4</div>
                            <h3>Save & Download</h3>
                            <p>Download for offline use and save your lesson plans & notes directly to your Schemes of Work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
