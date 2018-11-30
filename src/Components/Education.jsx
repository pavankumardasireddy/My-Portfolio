import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
        <div className="container cc-education">
            <div className="h4 text-center mb-4 title">Education</div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body cc-education-header">
                            <p>2014 - 2017</p>
                            <div className="h5">Master's Degree (MCA)</div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body">
                            <div className="h5">Master of Computer Applications</div>
                            <p className="category">Prasad.V.Potluri Siddhartha Institute Of Technology.</p>
                            <p>Prasad.V.Potluri Siddhartha Institute Of Technology.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body cc-education-header">
                            <p>2011 - 2014</p>
                            <div className="h5">Bachelor's Degree</div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body">
                            <div className="h5">B.Sc (M.S.Cs)</div>
                            <p className="category">Rutvik's Degree College</p>
                            <p>Rutvik's Degree College</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body cc-education-header">
                            <p>2009 - 2011</p>
                            <div className="h5">Intermediate</div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body">
                            <div className="h5">M.P.C</div>
                            <p className="category">Aditya Jr & Degree College</p>
                            <p>Aditya Jr & Degree College.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body cc-education-header">
                            <p>2008 - 2009</p>
                            <div className="h5">Secondary Education</div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                        <div className="card-body">
                            <div className="h5">Secondary Education</div>
                            <p className="category">School of Secondary board</p>
                            <p>Krishna Chaitanya Public School.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Education;
