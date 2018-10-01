import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
        <div className="container">
            <div className="content-center">
                <div className="cc-profile-image"><a href="#"><img src="images/PavanKumar.jpg" alt="Image" /></a></div>
                <div className="h2 title">Pavan Kumar Dasireddy</div>
                <p className="category text-white">Fullstack Developer, Freelancer, Gamer, Travel lover</p><a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
            </div>
        </div>
    );
  }
}

export default Profile;
