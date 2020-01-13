import React, { Component } from 'react';
import swal from 'sweetalert';

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactDetails: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
  }
   // Managing form values with state
   handleChange = name => event => {
    var value = event.target.value ? event.target.value : ''
    this.setState((state) => { state.contactDetails[name]= value },()=>{
      console.log('state values: ', this.state.contactDetails)
    });
  };

  // Static response
  // contact(e) {
  //   e.preventDefault();
  //   alert(`Thanks!! ${this.state.contactDetails.name} I'll get back to you soon.`)
  // }

  sendMail(e, data) {
    e.preventDefault();
    // Checking each value, if empty then showing the alert message.
    if(data.contactDetails.name=="" || data.contactDetails.name.trim() =="") {
     swal("name is required");
    }
    if(data.contactDetails.email=="" || data.contactDetails.email.trim() =="") {
     swal("Email Address is required");
    }
    if(data.contactDetails.subject=="" || data.contactDetails.subject.trim() =="") {
      swal("subject is required");
    }
    if(data.contactDetails.message.trim() =="") {
      swal("Message is required");
    }

    //Checking for the form values are filled or not if filled then passing data to the API
    if(this.state.contactDetails.name!=='' && this.state.contactDetails.name.trim() !== "" && this.state.contactDetails.email !== "" && this.state.contactDetails.email.trim() !== "" &&this.state.contactDetails.subject !== "" && this.state.contactDetails.subject.trim() !== "" && this.state.contactDetails.message !== "" && this.state.contactDetails.message.trim() !== ""){
      var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var req={
        name  : this.state.contactDetails.name,
        from : this.state.contactDetails.email,
        subject : this.state.contactDetails.subject,message:this.state.contactDetails.message,
      }
      if(!emailRegex.test(req.from)) {
        swal("Please enter a valid email address")
      } else {
        fetch('https://pavankumardasireddy.netlify.com/sendEmail', {
          method: 'POST',
          body: JSON.stringify(req),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response)=>response.json())
          .then((data)=>{
            swal(`${data.message}`, "Please check your inbox once.", "success")
            .then((value) => {
              window.location.reload()
            });
          })
          .catch((error)=>{
            console.log("Error, with message::",error)
          }); 
      }
        
      
           
    }
  }

  render() {
    return (
      <div className="cc-contact-information" style={{ backgroundImage: 'url("images/staticmap.png")' }}>
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
                                <input className="form-control" type="text" name="name" placeholder="Name" required="required" onChange={this.handleChange('name')}/>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group"><span className="input-group-addon"><i className="fa fa-file-text" /></span>
                                <input className="form-control" type="text" name="subject" placeholder="Subject" required="required" onChange={this.handleChange('subject')}/>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                <input className="form-control" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="E-mail" required="required" onChange={this.handleChange('email')}/>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Your Message" required="required" defaultValue={""} onChange={this.handleChange('message')}/>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              {/* <button className="btn btn-primary" type="submit" onClick={(e)=> {this.contact(e)}}>Send</button> */}
                              <button className="btn btn-primary" type="submit" onClick={(e)=>{this.sendMail(e, this.state)}}>Send</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <p className="mb-0"><strong>Address </strong></p>
                        <p className="pb-2">61-3/5-6/75 (54), Flat No:105, Bhupesh Guptha Nagar, Krishna Lanka, Vijayawada, AP, India.</p>
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
    );
  }
}

export default ContactMe;
