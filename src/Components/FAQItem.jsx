import React from 'react';

function FAQItem({ id, question, answer }) {
    return (
        <div className="accordion-item">
            <div className={`accordion-header ${id === 1 ? '' : 'collapsed'}`} data-toggle="collapse" data-target={`#collapse-0${id}`}>
                <h3>{question}</h3>
            </div>
            <div className={`collapse ${id === 1 ? 'show' : ''}`} id={`collapse-0${id}`} data-parent="#accordion">
                <div className="accordion-body">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}

export default FAQItem;
