import React from "react";
import { useHistory } from "react-router-dom";
// import BeingSupported from "../BeingSupported/BeingSupported";
// import FeelingToday from "../FeelingToday/FeelingToday";
// import LeaveComment from "../LeaveComment/LeaveComment";
// import UnderstandingContent from "../UnderstandingContent/UnderstandingContent";
import { useSelector } from "react-redux";


function ReviewFeedback() {

  const history = useHistory();
  const feelingToday = useSelector(store => store.feelingToday);

  const handleClick = () => {

    console.log(`adding new feedback submission`, feelingToday);

    let action = { type: 'ADD_FEEDBACK',
  payload: { feeling: feelingToday }
};

//dispatch(action);


//axios.post


    alert(' Headed to Submission Success page');
    history.push('/submissionSuccess')
  }

  return(

<>
    <section>
      <h2>Review Your Feedback</h2>
      <ul>Feelings Understanding Support Comments: Text</ul>

    
      <button onClick={handleClick}>Submit</button>
    </section>
      </>
  )
}

export default ReviewFeedback;