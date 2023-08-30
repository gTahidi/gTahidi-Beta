import React from 'react';
import FAQItem from './FAQItem';

function Faq() {
    const faqList = [
        {
            id: 1,
            question: 'What is gTahidi AI',
            answer: 'gTahidi AI is like your digital teaching assistant. We\'re here to help Kenyan teachers and content creators make their work easier. With our platform, you can quickly get lesson plans, notes, and even assessment questions tailored just for you.'
        },
        {
            id: 2,
            question: 'How can AI be utilized to create personalized lesson plans for students?',
            answer: 'Think of AI as a smart friend who knows a lot about teaching. It looks at what each student needs, their strengths, and areas they can improve. Then, it crafts lesson plans that fit each student perfectly. So, every student gets a lesson that\'s just right for them.'
        },
        {
            id: 2,
            question: 'What are the benefits of using AI-generated notes compared to traditional note-taking methods?',
            answer: 'With AI-generated notes, you save time because the system does the heavy lifting. The notes are clear, to the point, and cover all the essentials. Plus, they can be tailored to fit different learning styles. It\'s like having notes that speak directly to each student.'
        },
        {
            id: 2,
            question: 'Are there any potential drawbacks or limitations of using AI for lesson planning?',
            answer: 'Like all tools, it\'s how you use it that matters. While gTahidi AI is here to help, it\'s essential to add your personal touch to the lessons. And don\'t worry, all your data is safe with us. We\'re here to support, not replace the human touch in teaching.'
        },
    ];

    return (
        <section className="faq section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>frequently <span>asked</span> queries</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div id="accordion">
                            {faqList.map(faq => <FAQItem key={faq.id} {...faq} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
