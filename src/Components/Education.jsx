import React, { Component } from 'react';
import data from '../staticData'

class Edu extends Component {
    render() {
        return (
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body cc-education-header">
                            <p>{this.props.edu.fromTo}</p>
                            <div className="h5">{this.props.edu.title}</div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body">
                            <div className="h5">{this.props.edu.qualification}</div>
                            <p className="category">{this.props.edu.college}</p>
                            <p>{this.props.edu.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Education extends Component {
  render() {
    return (
        <div className="container cc-education">
            <div className="h4 text-center mb-4 title">Education</div>
            {
                data.education.map((edu, key)=> {
                    return <Edu edu={edu} />
                })
            }
        </div>
    );
  }
}

export default Education;
