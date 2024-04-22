import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function LeaveComments() {

  const history = useHistory();

  const handleClick = () => {
    alert('Headed to Review Feedback page');
    history.push('/review');
  }

  return (

    <section>
      <h2>Any comments you want to leave?</h2>
      <button onClick={handleClick}>Next</button>
      <input>Comments "Text"</input>
    </section>
  )

}

export default LeaveComments;