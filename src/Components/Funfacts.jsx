import React from 'react';
import fun_facts_img from '../images/fun-facts.jpg';

function Funfacts() {
    return (
        <section className="fun-facts section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 d-flex align-items-center justify-content-center">
                        <div className="fun-fact-img">
                            <img src={fun_facts_img} alt="fun facts" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2>fun <span>facts</span></h2>
                        </div>
                        <div className="fun-facts-text">
                            <p>
                                Did you know? gTahidi AI is not just limited to Kenya. Our platform is compliant with over 80% of global curricula, making it a universal tool for educators worldwide. On average, our users create a lesson plan in under 5 minutes. That's faster than brewing a cup of coffee!
                            </p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="fun-fact-item style-1">
                                        <h3>5000 +</h3>
                                        <span>users</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="fun-fact-item style-2">
                                        <h3>300</h3>
                                        <span>likes</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="fun-fact-item style-3">
                                        <h3>700</h3>
                                        <span>5 star ratings</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="fun-fact-item style-4">
                                        <h3>100</h3>
                                        <span>awards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Funfacts;
