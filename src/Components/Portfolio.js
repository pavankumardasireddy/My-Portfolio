import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">Portfolio</div>
            {/* <div className="nav-align-center">
              <ul className="nav nav-pills nav-pills-primary" role="tablist">
                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist"><i className="fa fa-laptop" aria-hidden="true" /></a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design" role="tablist"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Photography" role="tablist"><i className="fa fa-camera" aria-hidden="true" /></a></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="tab-content gallery mt-5">
          <div className="tab-pane active" id="web-development">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="http://tweakvideos.net/" target="_blank" >
                      <figure className="cc-effect"><img src="images/tweak-main.png" alt="Image" />
                        <figcaption>
                            <div className="h4">Tweak Videos</div>
                            <p>Web Application</p>
                            {/* <p className="text-lowercase"><a style={{color:"white"}} href="http://tweakvideos.net/" target="_blank" >http://tweakvideos.net/</a></p> */}
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="https://xyzies.herokuapp.com" target="_blank">
                      <figure className="cc-effect"><img src="images/xyzies-main.png" alt="Image" />
                        <figcaption>
                            <div className="h4">XYZies</div>
                            <p>Web Admin</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="http://app.tweakvideos.net" target="_blank">
                      <figure className="cc-effect"><img src="images/tweak-admin.png" alt="Image" />
                        <figcaption>
                            <div className="h4">Tweak WebAdmin</div>
                            <p>Web Admin</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="http://fanler.net/" target="_blank">
                      <figure className="cc-effect"><img src="images/xyzies-main.png" alt="Image" />
                        <figcaption>
                          <div className="h4">Fanler</div>
                          <p>Web Admin for Sportsfans</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="tab-pane" id="graphic-design" role="tabpanel">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#graphic-design">
                      <figure className="cc-effect"><img src="images/graphic-design-1.jpg" alt="Image" />
                        <figcaption>
                          <div className="h4">Triangle Pattern</div>
                          <p>Graphic Design</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#graphic-design">
                      <figure className="cc-effect"><img src="images/graphic-design-2.jpg" alt="Image" />
                        <figcaption>
                            <div className="h4">Abstract Umbrella</div>
                            <p>Graphic Design</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#graphic-design">
                      <figure className="cc-effect"><img src="images/graphic-design-3.jpg" alt="Image" />
                        <figcaption>
                            <div className="h4">Cube Surface Texture</div>
                            <p>Graphic Design</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#graphic-design">
                      <figure className="cc-effect"><img src="images/graphic-design-4.jpg" alt="Image" />
                        <figcaption>
                            <div className="h4">Abstract Line</div>
                            <p>Graphic Design</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="Photography" role="tabpanel">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#Photography">
                      <figure className="cc-effect"><img src="images/photography-1.jpg" alt="Image" />
                        <figcaption>
                          <div className="h4">Photoshoot</div>
                          <p>Photography</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#Photography">
                      <figure className="cc-effect"><img src="images/photography-3.jpg" alt="Image" />
                        <figcaption>
                          <div className="h4">Wedding Photoshoot</div>
                          <p>Photography</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#Photography">
                      <figure className="cc-effect"><img src="images/photography-2.jpg" alt="Image" />
                        <figcaption>
                          <div className="h4">Beach Photoshoot</div>
                          <p>Photography</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#Photography">
                      <figure className="cc-effect"><img src="images/photography-4.jpg" alt="Image" />
                        <figcaption>
                          <div className="h4">Nature Photoshoot</div>
                          <p>Photography</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Portfolio;
