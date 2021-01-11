import React, { Component } from "react";
import emailjs from 'emailjs-com'

export class Contact extends Component {

  state = {from_name:'', to_name:'', message:''}

  render() {

    const sendEmail = (e)=>{
      e.preventDefault();
      emailjs.sendForm('service_fzln0d5', 'template_k5k4z1o', e.target, 'user_dAxcnm4xD7JpA6bM2XM61')
        .then((result) => {
            console.log(result.text,'PPPPPPPPPP');
        }, (error) => {
            console.log(error.text,'OOOOOOOOO');
        });
        // this.resetForm
    }

    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={sendEmail} name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          name='from_name'
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="name"
                          className="form-control"
                          placeholder="Email"
                          name='email'
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={handleChange}
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div> */}
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <div>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>
                  {this.props.data ? this.props.data.phone.map(contact=><p key={contact.phoneNumber}>{contact.phoneNumber}</p>): "loading"}
                </div>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
