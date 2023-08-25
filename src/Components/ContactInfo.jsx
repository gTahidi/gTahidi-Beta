import React from 'react';

function ContactInfo({ icon, title, detail }) {
    return (
        <div className="contact-info-item">
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{detail}</p>
        </div>
    );
}

export default ContactInfo;
