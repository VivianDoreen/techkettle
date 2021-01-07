import React, { Component } from 'react'
import Navigation from './components/navigation';
import HowWeWork from './components/howWeWork';
import Testimonials from './components/Testimonials';
import About from './components/about';
import Services from './components/services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Home from  './components/Home'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'

export class App extends Component {
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
        <Router>
        <Navigation />
          <Switch>
            <Route path='/' exact component = {Home}/>
            <Route path='/#about' exact render={(props=>(<About {...props} data={this.state.landingPageData.About} />))}/>
            <Route path='/#services' exact render={(props=>(<Services {...props} data={this.state.landingPageData.Services} />))}/>
            <Route path='/#contact' exact render={(props=>(<Contact {...props} data={this.state.landingPageData.Contact} />))} />
            <Route path='/#why-choose-us' exact render={(props=>(<WhyChooseUs {...props} data={this.state.landingPageData.WhyChooseUs} />))} />
            <Route path='/#testimonials' exact render={(props=>(<Testimonials {...props} data={this.state.landingPageData.Testimonials} />))} />
            <Route path='/how-we-work' exact render={(props=>(<HowWeWork {...props} data={this.state.landingPageData.HowWeWork} />))} />
            <Route path='/team' exact render = {(props)=>(<Team {...props} data={this.state.landingPageData.Team} />)}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
