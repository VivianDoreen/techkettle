import React, { Component } from 'react';
import Navigation from './components/navigation';
import HowWeWork from './components/howWeWork';
import Testimonials from './components/Testimonials';
import About from './components/about';
import Services from './components/services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Footer from './components/Footer';
import Home from './components/Home';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SnackbarTooltip from './components/SnackbarTooltip';

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Router basename="/">
          <Navigation logo={this.state.landingPageData.Logo} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/#about"
              exact
              render={(props) => (
                <About {...props} data={this.state.landingPageData.About} />
              )}
            />
            <Route
              path="/#services"
              exact
              render={(props) => (
                <Services
                  {...props}
                  data={this.state.landingPageData.Services}
                />
              )}
            />
            <Route
              path="/#contact"
              exact
              render={(props) => (
                <Contact {...props} data={this.state.landingPageData.Contact} />
              )}
            />
            <Route
              path="/#why-choose-us"
              exact
              render={(props) => (
                <WhyChooseUs
                  {...props}
                  data={this.state.landingPageData.WhyChooseUs}
                />
              )}
            />
            <Route
              path="/#testimonials"
              exact
              render={(props) => (
                <Testimonials
                  {...props}
                  data={this.state.landingPageData.Testimonials}
                />
              )}
            />
            <Route
              path="/how-we-work"
              render={(props) => (
                <HowWeWork
                  {...props}
                  data={this.state.landingPageData.HowWeWork}
                />
              )}
            />
            <Route
              path="/team"
              render={(props) => (
                <Team {...props} data={this.state.landingPageData.Team} />
              )}
            />
            <Route path="/snackbar" exact component={SnackbarTooltip} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
