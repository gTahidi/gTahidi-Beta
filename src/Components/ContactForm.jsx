import React from 'react';

function ContactForm() {
    return (
        <div className="contact-form">
            <form>
                {/* ... other form fields ... */}
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" className="btn btn-2">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
