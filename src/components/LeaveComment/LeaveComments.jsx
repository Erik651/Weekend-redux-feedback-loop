import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function LeaveComments() {
  const [comment, setComment] = useState('Please leave comments');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    console.log(`adding comments to leave comments`, { comment });

    let action = {
      type: 'ADD_COMMENTS',
      payload: { comment: comment }
    };

    dispatch(action);

    alert('Headed to Review Feedback page');
    history.push('/review');
  }

  return (
<>
    <section>
      <h2>Any comments you want to leave?</h2>
      <input
      required
      placeholder="Please leave comments"
      value={comment}
      onChange={(event) => setComment(event.target.value)}/>Comments

      <button onClick={handleClick}>Next</button>
      
    </section>
    </>
  )

}

export default LeaveComments;