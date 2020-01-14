import React from 'react';

const FollowSection = () => {
    return (
        <div className="container">
            <div className="button-container">
              <a className="btn btn-default btn-round btn-lg btn-icon cc-twitter-follow" href="https://twitter.com/PavankDasireddy" target="_blank" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter" /></a>
              <a className="btn btn-default btn-round btn-lg btn-icon cc-facebook-follow" href="https://www.facebook.com/pavankumardasireddy" target="_blank" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook" /></a>
              <a className="btn btn-default btn-round btn-lg btn-icon cc-github-follow" href="https://github.com/pavankumardasireddy" target="_blank" rel="tooltip" title="Follow me on github"><i className="fa fa-github" /></a>
              <a className="btn btn-default btn-round btn-lg btn-icon cc-linkedin-follow" href="https://www.linkedin.com/in/pavan-kumar-dasireddy-233b57111/" target="_blank" rel="tooltip" title="Connect with me on Linkedin"><i className="fa fa-linkedin" /></a>
              <a className="btn btn-default btn-round btn-lg btn-icon cc-instagram-follow" href="https://www.instagram.com/pavankumardasireddy/" target="_blank" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram" /></a>
              <a className="btn btn-default btn-round btn-lg btn-icon cc-stack-overflow-follow" href="https://stackoverflow.com/users/9333951/pavan-kumar-dasireddy" target="_blank" rel="tooltip" title="Check me on Stackoverflow"><i className="fa fa-stack-overflow" /></a>
              {/* <a className="btn btn-default btn-round btn-lg btn-icon cc-google-plus-follow" href="https://plus.google.com/u/0/114895713471086873411" target="_blank" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus" /></a> */}
            </div>
        </div>
    );
}

export default FollowSection;
