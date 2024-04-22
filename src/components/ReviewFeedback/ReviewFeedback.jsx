import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ReviewFeedback() {

  const history = useHistory();

  const handleClick = () => {

    console.log(`adding new feedback submission`, { scoreSupport, scoreFeeling, scoreUnderstanding, comment});

    let action = { type: 'ADD_FEEDBACK',
  payload: { scoreSupport: scoreSupport, scoreFeeling: scoreFeeling, scoreUnderstanding: scoreUnderstanding, comment: comment }
};

dispatch(action);


    alert(' Headed to Submission Success page');
    history.push('/submissionSuccess')
  }

  return(

    <section>

      <h2>Review Your Feedback</h2>
      <ul>Feelings Understanding Support Comments: Text</ul>
      <button onClick={handleClick}>Submit</button>
    </section>
  )
}

export default ReviewFeedback;