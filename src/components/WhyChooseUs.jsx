import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why Choose Us</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      {/* <div style={{textAlign:'center', marginBottom:'10px'}}>{d.title}</div> */}
                      <div className="testimonial-meta">{d.title}</div>
                      <div className="testimonial-image">
                        <i className={d.icon} style={{color:'rgb(98,117,254)'}}></i>
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default WhyChooseUs;
