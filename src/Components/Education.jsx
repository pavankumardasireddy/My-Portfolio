import React from 'react';
import data from '../staticData'

const Edu = ({edu}) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                        <div className="h5">{edu.title}</div>
                        <p>{edu.fromTo}</p>
                    </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body">
                        <div className="h5">{edu.qualification}</div>
                        <p className="category">{edu.college}</p>
                        <p>{edu.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const education = () => {
    return (
        <div className="container cc-education">
            <div className="h4 text-center mb-4 title">Educational Details</div>
            {
                data.education.map((edu, key)=> {
                    return <Edu edu={edu} key={edu.qualification}/>
                })
            }
        </div>
    );
}

export default education;
