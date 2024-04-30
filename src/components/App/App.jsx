import React from 'react';
import axios from 'axios';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import BeingSupported from '../BeingSupported/BeingSupported.jsx';
import FeelingToday from '../FeelingToday/FeelingToday.jsx';
import UnderstandingContent from '../UnderstandingContent/UnderstandingContent';
import SubmissionSuccess from '../SubmissionSubmit/SubmissionSuccess';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import LeaveComment from '../LeaveComment/LeaveComment.jsx';
import Home from '../Home/Home.jsx';
//import Header from '../Header/Header.js';
//import { Router } from 'express';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/support">
            <BeingSupported />
          </Route>
          <Route exact path="/feeling">
            <FeelingToday />
          </Route>
          <Route exact path="/understanding">
            <UnderstandingContent />
          </Route>
          <Route exact path="/submissionSuccess">
            <SubmissionSuccess />
          </Route>
          <Route exact path="/review">
            <ReviewFeedback />
          </Route>
          <Route exact path="/comment">
            <LeaveComment />
          </Route>
        </Router>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
