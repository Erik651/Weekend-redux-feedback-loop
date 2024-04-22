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
import Header from '../Header/Header.js';
import { Router } from 'express';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <Router>
          <Route exact path="/beingSupported">
            <BeingSupported />
          </Route>
          <Route exact path="/feelingToday">
            <FeelingToday />
          </Route>
          <Route exact path="understandingContent">
            <UnderstandingContent />
          </Route>
          <Route exact path="submissionSuccess">
            <SubmissionSuccess />
          </Route>
          <Route exact path="reviewFeedback">
            <ReviewFeedback />
          </Route>
        </Router>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
