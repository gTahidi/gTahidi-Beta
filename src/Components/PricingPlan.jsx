import React from 'react';

function PricingPlan({ title, currency, pricing, period, features }) {
    return (
        <div className="pricing-plan">
            <div className="pricing-header">
                <h3>{title}</h3>
            </div>
            <div className="pricing-price">
                <span className="currency">{currency}</span>
                <span className="pricing">{pricing}</span>
                <span className="period">{period}</span>
            </div>
            <div className="pricing-body">
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                </ul>
            </div>
            <div className="pricing-footer">
                <a href="#" className="btn btn-2">get started</a>
            </div>
        </div>
    );
}

export default PricingPlan;
