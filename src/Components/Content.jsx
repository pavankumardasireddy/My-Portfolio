import React, { Component } from 'react';
import Profile from './Profile';
import FollowSection from './FollowSection';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Education from './Education';
import Reference from './Reference';
import ContactMe from './ContactMe';

class Content extends Component {
  render() {
    return (
        <div className="page-content">
            <div>
                <div className="profile-page">
                    <div className="wrapper">
                        <div className="page-header page-header-small" filter-color="green">
                            <div className="page-header-image" data-parallax="true" style={{backgroundImage: 'url("images/cc-bg-1.jpg")'}} />
                            <Profile />
                            <div className="section">
                                <FollowSection />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="about">
                    <About />
                </div>
                <div className="section" id="skill">
                    <Skills />
                </div>
                <div className="section" id="portfolio">
                    <Portfolio />
                </div>
                <div className="section" id="experience">
                    <Experience />
                </div>
                <div className="section">
                    <Education />
                </div>
                <div className="section" id="reference">
                    <Reference />
                </div>
                <div className="section" id="contact">
                    <ContactMe />
                </div>
            </div>
      </div>
    );
  }
}

export default Content;