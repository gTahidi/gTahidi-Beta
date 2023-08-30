import React from 'react';
import FooterColumn from './FooterColumn';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <FooterColumn 
                        title="About us"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempora. Repudiandae esse ipsam numquam. Ad!"
                    />
                    <FooterColumn 
                        title="Company"
                        links={[
                            { name: 'privacy policy', href: '#' },
                            { name: 'terms and conditions', href: '#' },
                            { name: 'latest blogs', href: '#' },
                            { name: 'app services', href: '#' }
                        ]}
                    />
                    <FooterColumn 
                        title="Quick links"
                        links={[
                            { name: 'home', href: '#home' },
                            { name: 'features', href: '#features' },
                            { name: 'how it works', href: '#howitworks' },
                            { name: 'pricing', href: '#pricing' },
                            { name: 'testimonials', href: '#testimonials' }
                        ]}
                    />
                    <FooterColumn 
                        title="Social page"
                        links={[
                            { name: 'facebook', href: '#' },
                            { name: 'twitter', href: '#' },
                            { name: 'instagram', href: '#' },
                            { name: 'linkedin', href: '#' }
                        ]}
                    />
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="copyright-text">&copy;2021 @ Eric Koome</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
