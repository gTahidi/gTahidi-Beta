import React from 'react';
import PricingPlan from './PricingPlan';

function Pricing() {
    const plans = [
        {
            title: 'starter',
            currency: '',
            pricing: 'Free',
            period: '',
            features: ['Lesson Plans', 'Assessment Questions']
        },
        {
            title: 'essential',
            currency: 'Ksh',
            pricing: '300',
            period: '/monthly',
            features: ['Lesson Plans', 'Assessment Questions', 'Schemes of Work']
        },
        {
            title: 'pro',
            currency: 'Ksh',
            pricing: '500',
            period: '/monthly',
            features: ['Lesson Plans', 'Assessment Questions', 'Schemes of Work', 'Lesson Notes']
        }
    ];

    return (
        <section className="pricing section-padding" id="pricing" data-scroll-index="5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>pricing <span>plan</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {plans.map((plan, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <PricingPlan {...plan} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
