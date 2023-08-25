import React from 'react';
import TestimonialItem from './TestimonialItem';
import Testimonial1 from '../images/1.jpg';
import Testimonial2 from '../images/2.jpg';
import Testimonial3 from '../images/3.jpg';
import Testimonial4 from '../images/4.jpg';

function Testimonials() {
    const testimonialsData = [
        {
            image: {Testimonial1},
            altText: 'testimonial',
            testimonialText: 'Lorem ipsum...',
            name: 'davies koome',
            role: 'UI designer',
            rating: 5 // example if you want to componentize ratings
        },
        {
            image: {Testimonial2},
            altText: 'testimonial',
            testimonialText: 'Lorem ipsum...',
            name: 'davies koome',
            role: 'UI designer',
            rating: 5 // example if you want to componentize ratings
        },
        {
            image: {Testimonial3},
            altText: 'testimonial',
            testimonialText: 'Lorem ipsum...',
            name: 'davies koome',
            role: 'UI designer',
            rating: 5 // example if you want to componentize ratings
        },
        {
            image: {Testimonial4},
            altText: 'testimonial',
            testimonialText: 'Lorem ipsum...',
            name: 'davies koome',
            role: 'UI designer',
            rating: 5 // example if you want to componentize ratings
        },
        
    ];

    return (
        <section className="testimonials section-padding" id="testimonials" data-scroll-index="4">
            {/* ... other parts of the component ... */}
            <div className="owl-carousel testimonials-carousel">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialItem key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
