import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body cc-experience-header">
                <p>June 2017 - Present</p>
                <div className="h5">Full-Stack Developer</div>
              </div>
            </div>
            <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body">
                <div className="h5">Stellentsoft Pvt. Ltd.</div>
                <p>I'm working here from June 2017 to till date as a Fullstack Developer.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body cc-experience-header">
                <p>March 2017 - June 2017</p>
                <div className="h5">MEAN-Stack Developer</div>
              </div>
            </div>
            <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body">
                <div className="h5">Credo Web Solutions</div>
                <p>I worked here as a MEAN Stack Developer for 3 months.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body cc-experience-header">
                <p>Jan 2017 - March 2017</p>
                <div className="h5">Intern</div>
              </div>
            </div>
            <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body">
                <div className="h5">Credo Web Solutions</div>
                <p>Did my 3 months Internship on MEANSTACK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
