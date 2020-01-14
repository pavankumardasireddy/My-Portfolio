import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <a className="cc-twitter btn btn-link " href="https://twitter.com/PavankDasireddy" target="_blank"><i className="fa fa-twitter fa-2x " aria-hidden="true" /></a>
                <a className="cc-facebook btn btn-link" href="https://www.facebook.com/pavankumardasireddy" target="_blank"><i className="fa fa-facebook fa-2x " aria-hidden="true" /></a>
                <a className="cc-github btn btn-link" href="https://github.com/pavankumardasireddy" target="_blank"><i className="fa fa-github fa-2x " aria-hidden="true" /></a>
                <a className="cc-linkedin btn btn-link" href="https://www.linkedin.com/in/pavan-kumar-dasireddy-233b57111/" target="_blank"><i className="fa fa-linkedin fa-2x " aria-hidden="true" /></a>
                <a className="cc-instagram btn btn-link" href="https://www.instagram.com/pavankumardasireddy/" target="_blank"><i className="fa fa-instagram fa-2x " aria-hidden="true" /></a>
                <a className="cc-stack-overflow btn btn-link" href="https://stackoverflow.com/users/9333951/pavan-kumar-dasireddy" target="_blank"><i className="fa fa-stack-overflow fa-2x " aria-hidden="true" /></a>
                {/* <a className="cc-google-plus btn btn-link" href="https://plus.google.com/u/0/114895713471086873411" target="_blank"><i className="fa fa-google-plus fa-2x" aria-hidden="true" /></a> */}
            </div>
            <div className="h4 title text-center">Pavan Kumar.D</div>
            <div className="text-center text-muted">
                <p style={{fontSize:4}}>© Creative CV. All rights reserved.<br />Design - <a className="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a></p>
            </div>
        </footer>
    );
}

export default Footer;
