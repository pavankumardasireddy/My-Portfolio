import React, { Component } from 'react';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';

class Content extends Component {
  render() {
    return (
        <div className="page-content">
            <div>
                <div className="profile-page">
                    <div className="wrapper">
                        <div className="page-header page-header-small" filter-color="green">
                            <div className="page-header-image" data-parallax="true" style={{backgroundImage: 'url("images/cc-bg-1.jpg")'}} />
                            <div className="container">
                                <div className="content-center">
                                    <div className="cc-profile-image"><a href="#"><img src="images/PavanKumar.jpg" alt="Image" /></a></div>
                                    <div className="h2 title">Pavan Kumar Dasireddy</div>
                                    <p className="category text-white">Fullstack Developer, Freelancer, Gamer, Travel lover</p><a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
                                </div>
                            </div>
                            <div className="section">
                                <div className="container">
                                    <div className="button-container">
                                        <a className="btn btn-default btn-round btn-lg btn-icon cc-facebook" href="https://www.facebook.com/pavankumardasireddy" target="_blank" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook" /></a>
                                        <a className="btn btn-default btn-round btn-lg btn-icon cc-twitter" href="https://twitter.com/PavankDasireddy" target="_blank" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter" /></a>
                                        <a className="btn btn-default btn-round btn-lg btn-icon cc-google-plus" href="https://plus.google.com/u/0/114895713471086873411" target="_blank" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus" /></a>
                                        <a className="btn btn-default btn-round btn-lg btn-icon cc-instagram" href="https://www.instagram.com/pavankumardasireddy/" target="_blank" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram" /></a>

                                        <a className="btn btn-default btn-round btn-lg btn-icon cc-linkedin" href="https://www.linkedin.com/in/pavan-kumar-dasireddy-233b57111/" target="_blank" rel="tooltip" title="Connect me on Linkedin"><i className="fa fa-linkedin" /></a>
                                        <a className="btn btn-default btn-round btn-lg btn-icon cc-stack-overflow" href="https://stackoverflow.com/users/9333951/pavan-kumar-dasireddy" target="_blank" rel="tooltip" title="Check me on Stackoverflow"><i className="fa fa-stack-overflow" /></a>
                                        <a className="btn btn-default btn-round btn-lg btn-icon cc-github" href="https://github.com/pavankumardasireddy" target="_blank" rel="tooltip" title="Follow me on github"><i className="fa fa-github" /></a>
                                    </div>
                                </div>
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
                </div>
                <div className="section">
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
                            <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
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
                            <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
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
                            <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
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
                            <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
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