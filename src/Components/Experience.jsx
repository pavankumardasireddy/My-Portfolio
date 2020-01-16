import React from 'react';
import data from '../staticData';

const WorkExperience = ({ data }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
          <div className="card-body cc-experience-header">
            <p>{data.fromTo}</p>
            <div className="h5">{data.designation}</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
          <div className="card-body">
            <div className="h5">{data.companyName}</div>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const experience = () => {
  return (
    <div className="container cc-experience">
      <div className="h4 text-center mb-4 title">Work Experience</div>
      {
        data.experience.map((data, key)=>{
          return <section>
            <WorkExperience data={data} key={data.companyName}/>
          </section>
        })
      }
    </div>
  );
}

export default experience;
