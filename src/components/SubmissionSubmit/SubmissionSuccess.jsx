import React from 'react';
import { useHistory } from 'react-router-dom';

function SubmissionSuccess() {
  const history = useHistory();
  const handleClick = (event) => {
    console.log('handleClick history.push');
    alert('Click to start new survey');
    history.push('/#/');
  };
  // function newFeedback() reset the survey
  return (
    <section>
      <h2>Thank You!</h2>
      <button onClick={handleClick}>Leave New Feedback</button>
    </section>
  );
}

export default SubmissionSuccess;
