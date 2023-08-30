import React from 'react';
import FeatureItem from './FeatureItem';

function Features() {
    return (
        <section className="features section-padding" id="features" data-scroll-index="1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-1g-8">
                        <div className="section-title">
                            <h2>why <span>gTahidi</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="features-carousel owl-carousel">
                        <FeatureItem iconClass="fas fa-code" title="Free" description="Its Free. Stop buying Lesson Plans and Schemes of work." />
                        <FeatureItem iconClass="fas fa-clock" title="Save Time" description="Saves you time.(Of Course)" />
                        <FeatureItem iconClass="fas fa-paint-brush" title="easy to start" description="Copy, Edit & Download it. It’s Yours." />
                        <FeatureItem iconClass="fas fa-check" title="global curricula" description="Compliant with over 80% of Global Curricula." />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
