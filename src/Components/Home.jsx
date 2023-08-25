import React from 'react';
import home_img from '../images/gtahidi_home.png';

function Home() {
    return (
        <section className="home d-flex align-items-center" id="home" data-scroll-index="0">
            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="home-text">
                            <h1>Karibu gTahidi</h1>
                            <h2>Revolutionize your <span>Teaching</span> with gTahidi AI</h2>
                            <p>Create Curriculum - Compliant Lesson Plans, Schemes of Work and Assessment Questions in Minutes</p>
                            <div className="home-btn">
                                <a href="schedule.html" data-scroll-goto="3" className="btn btn-1">Start Now</a>
                                <button type="button" className="btn btn-1 video-play-btn">
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 text-center">
                        <div className="home-img">
                            <img src={home_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
