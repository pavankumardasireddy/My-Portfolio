import React, { Component } from 'react';
import data from '../staticData';

class WorkExperience extends Component {
  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
            <div className="card-body cc-experience-header">
              <p>{this.props.data.fromTo}</p>
              <div className="h5">{this.props.data.designation}</div>
            </div>
          </div>
          <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
            <div className="card-body">
              <div className="h5">{this.props.data.companyName}</div>
              <p>{this.props.data.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Experience extends Component {
  render() {
    return (
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        {
          data.experience.map((data, key)=>{
            return <section>
              <WorkExperience data={data} />
            </section>
          })
        }
      </div>
    );
  }
}

export default Experience;
