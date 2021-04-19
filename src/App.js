
import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Projects from './components/pages/Projects/Projects';
import Blogs from './components/pages/Blog/Blogs';
import About from './components/pages/About/About';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/about' exact component={About} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
