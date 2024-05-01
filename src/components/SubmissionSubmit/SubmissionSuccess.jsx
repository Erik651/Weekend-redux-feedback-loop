import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";


function SubmissionSuccess() {
  const name = useSelector(store => store.name);
  const history = useHistory();
  const handleClick = (event) => {
    console.log('handleClick history.push');
    alert('Click to start new survey');
    history.push('/#/');
  };
  // function newFeedback() reset the survey
  return (
    <section>
      <h2>Thank you for your feedback, {name} !!</h2>
      <button onClick={handleClick}>Leave New Feedback</button>
    </section>
  );
}

export default SubmissionSuccess;
