import React from 'react';

function FooterColumn({ title, links, description }) {
    return (
        <div className="footer-col">
            <h3>{title}</h3>
            {description ? <p>{description}</p> : 
            <ul>
                {links.map((link, index) => 
                    <li key={index}><a href={link.href}>{link.name}</a></li>
                )}
            </ul>}
        </div>
    );
}

export default FooterColumn;
