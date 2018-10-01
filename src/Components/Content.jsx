import React, { Component } from 'react';
import Profile from './Profile';
import FollowSection from './FollowSection';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Education from './Education';

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
                    <div className="container cc-reference">
                    <div className="h4 mb-4 text-center title">References</div>
                    <div className="card" data-aos="zoom-in">
                        <div className="carousel slide" id="cc-Indicators" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li className="active" data-target="#cc-Indicators" data-slide-to={0} />
                            <li data-target="#cc-Indicators" data-slide-to={1} />
                            <li data-target="#cc-Indicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-1.jpg" alt="Image" />
                                <div className="h5 pt-2">Aiyana</div>
                                <p className="category">CEO / WEBM</p>
                                </div>
                                <div className="col-lg-10 col-md-9">
                                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-2.jpg" alt="Image" />
                                <div className="h5 pt-2">Braiden</div>
                                <p className="category">CEO / Creativem</p>
                                </div>
                                <div className="col-lg-10 col-md-9">
                                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-3.jpg" alt="Image" />
                                <div className="h5 pt-2">Alexander</div>
                                <p className="category">CEO / Webnote</p>
                                </div>
                                <div className="col-lg-10 col-md-9">
                                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section" id="contact">
                    <div className="cc-contact-information" style={{backgroundImage: 'url("images/staticmap.png")'}}>
                    <div className="container">
                        <div className="cc-contact">
                        <div className="row">
                            <div className="col-md-9">
                            <div className="card mb-0" data-aos="zoom-in">
                                <div className="h4 text-center title">Contact Me</div>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="card-body">
                                    <form action="https://formspree.io/your@email.com" method="POST">
                                        <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                                        <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group"><span className="input-group-addon"><i className="fa fa-user-circle" /></span>
                                            <input className="form-control" type="text" name="name" placeholder="Name" required="required" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group"><span className="input-group-addon"><i className="fa fa-file-text" /></span>
                                            <input className="form-control" type="text" name="Subject" placeholder="Subject" required="required" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                            <input className="form-control" type="email" name="_replyto" placeholder="E-mail" required="required" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row mb-3">
                                        <div className="col">
                                            <div className="form-group">
                                            <textarea className="form-control" name="message" placeholder="Your Message" required="required" defaultValue={""} />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col">
                                            <button className="btn btn-primary" type="submit">Send</button>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                    <p className="mb-0"><strong>Address </strong></p>
                                    <p className="pb-2">61-3/5-6/75 (54), Bhoopesh Guptha Nagar,Krishna Lanaka, Vijayawada, AP, India.</p>
                                    <p className="mb-0"><strong>Phone</strong></p>
                                    <p className="pb-2">+91 903-221-5508</p>
                                    <p className="mb-0"><strong>Email</strong></p>
                                    <p>pavankumar.dasireddy@gmail.com</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Content;