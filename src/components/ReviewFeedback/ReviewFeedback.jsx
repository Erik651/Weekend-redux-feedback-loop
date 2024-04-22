import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ReviewFeedback() {

  const history = useHistory();

  const handleClick = () => {
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