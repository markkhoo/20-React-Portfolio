import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />


      </div>
      <Footer />
    </Router>
  );
}

export default App;