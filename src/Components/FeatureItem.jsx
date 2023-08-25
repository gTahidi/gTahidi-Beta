import React from 'react';

function FeatureItem({ iconClass, title, description }) {
    return (
        <div className="features-item">
            <div className="icon">
                <i className={iconClass}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureItem;
