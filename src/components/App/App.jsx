import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageOne from '../PageOne/PageOne.jsx'
import PageTwo from '../PageTwo/PageTwo'
import PageThree from '../PageThree/PageThree'
import PageFour from '../PageFour/PageFour'
import Review from '../Review/Review'
import ThankYou from '../ThankYou/ThankYou'

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  useEffect(() => {
    getResponses();
  }, [])
  const getResponses = () => {
    axios.get('/responses').then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact> <PageOne /> </Route>
        <Route path="/pageTwo" exact> <PageTwo /> </Route>
        <Route path="/pageThree" exact> <PageThree /> </Route>
        <Route path="/pageFour" exact> <PageFour /> </Route>
        <Route path="/review" exact> <Review /> </Route>
        <Route path="/thankYou" exact> <ThankYou /> </Route>
      </Router>
      {/*All Routes are set to exact so that only one page will show on screen at a time */}
    </div>
  );
}

export default App;
