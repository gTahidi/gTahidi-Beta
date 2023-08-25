import React from 'react';

function SectionTitle({ mainTitle, subTitle }) {
    return (
        <div className="section-title">
            <h2>{mainTitle} <span>{subTitle}</span></h2>
        </div>
    );
}

export default SectionTitle;
