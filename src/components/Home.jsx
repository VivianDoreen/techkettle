import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import WhyChooseUs from './WhyChooseUs';
import Contact from './contact';
import JsonData from '../data/data.json';

export class Home extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        {/* <Gallery /> */}
        <WhyChooseUs data={this.state.landingPageData.WhyChooseUs} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default Home;
