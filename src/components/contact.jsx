import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class Contact extends Component {
  state = { from_name: '', email: '', message: '', open: false, error: '' };

  render() {
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, 'namejhgvj');
      this.setState({ [name]: value });
    };

    const sendEmail = (e) => {
      e.preventDefault();
      const { from_name, email, message } = this.state;

      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (from_name.length === 0)
        this.setState({ error: 'Your name is required' });
      else if (email.length === 0)
        this.setState({ error: 'Your email is required' });
      else if (!regEmail.test(email))
        this.setState({ error: 'Your email is invalid' });
      else if (message.length === 0) {
        this.setState({ error: 'Your message is required' });
      } else {
        emailjs
          .sendForm(
            'service_fzln0d5',
            'template_k5k4z1o',
            e.target,
            'user_dAxcnm4xD7JpA6bM2XM61'
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

        this.setState({
          from_name: '',
          email: '',
          message: '',
        });

        this.setState({ error: '' });
        this.setState({ open: true });
      }
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({ open: false });
    };

    const { from_name, email, message } = this.state;

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
                <p
                  style={{
                    backgroundColor: '#cccccc',
                    color: '#EE1A24',
                    padding: `${
                      this.state.error.length !== 0 ? '3px 3px' : '0px'
                    }`,
                    textAlign: 'center',
                  }}
                >
                  {this.state.error}
                </p>
                <form
                  onSubmit={sendEmail}
                  name="sentMessage"
                  id="contactForm"
                  noValidate
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          value={from_name}
                          name="from_name"
                          onChange={handleChange}
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
                          value={email}
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      onChange={handleChange}
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
                  {this.props.data ? this.props.data.address : 'loading'}
                </p>
              </div>
              <div className="contact-item">
                <div>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>
                  {this.props.data
                    ? this.props.data.phone.map((contact) => (
                        <p key={contact.phoneNumber}>{contact.phoneNumber}</p>
                      ))
                    : 'loading'}
                </div>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{' '}
                  {this.props.data ? this.props.data.email : 'loading'}
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
        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            style={{ fontSize: 14 }}
            onClose={handleClose}
            severity="success"
          >
            Thank you, message has been received!
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default Contact;
