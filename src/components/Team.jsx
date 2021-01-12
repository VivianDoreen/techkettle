import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div>
            <h2>Meet the Team</h2>
            <p>
            A strong team are the foundation of a successful business
            </p>
          </div>
          <br/>
          <div id='row-team'>
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} >
                    <div className="thumbnail">
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
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

export default Team;
