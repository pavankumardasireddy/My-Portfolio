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
                <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body cc-experience-header">
                <p>March 2017 - June 2017</p>
                <div className="h5">Credo Web Solutions</div>
              </div>
            </div>
            <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
              <div className="card-body">
                <div className="h5">Credo Web Solutions</div>
                <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
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
                <p>this is description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
