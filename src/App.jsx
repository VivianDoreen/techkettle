import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import HowWeWork from './components/howWeWork';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
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
            <Route path='/how-we-work' exact render={(props=>(<HowWeWork {...props} data={this.state.landingPageData.HowWeWork} />))} />
            <Route path='/team' exact render = {(props)=>(<Team {...props} data={this.state.landingPageData.Team} />)}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
