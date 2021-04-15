
import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer'
import Projects from './components/pages/Projects/Projects';
import Blogs from './components/pages/Blog/Blogs';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/blogs' exact component={Blogs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
