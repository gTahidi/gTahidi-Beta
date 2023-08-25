import React from 'react';

function TestimonialItem({ image, altText, testimonialText, name, role, rating }) {
    return (
        <div className="testimonials-item">
            <div className="img-box">
                <img src={image} alt={altText} />
                <i className="fas fa-quote-right"></i>
            </div>
            <p>{testimonialText}</p>
            <h3>{name}</h3>
            <span>{role}</span>
            <div className="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
    );
}

export default TestimonialItem;
