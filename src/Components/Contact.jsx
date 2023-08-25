import React from 'react';
import SectionTitle from './SectionTitle';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section className="contact section-padding" data-scroll-index="6">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <SectionTitle mainTitle="get in" subTitle="touch" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="contact-info">
                            <h3>For Any Queries And Support</h3>
                            <ContactInfo icon="fas fa-location-arrow" title="Company Location" detail="Nairobi, Kenya" />
                            <ContactInfo icon="fas fa-envelope" title="Write to us at" detail="hello@ujaotech.com" />
                            <ContactInfo icon="fas fa-phone" title="Call us on" detail="0703224644" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
