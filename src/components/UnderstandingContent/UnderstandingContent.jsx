import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

function UnderstandingContent() {
  const [score, setScore] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    console.log(`adding understanding score`, { score });

    let action = {
      payload: { score: score }
    };

    dispatch(action);

    alert('Headed to Being Supported page');
    history.push('/support')
  }
return (
  <section>
<h2>How well are you understanding the content?</h2>
<input
required
placeholder="Understanding 1-5"
value={score}
onChange={(event) => setScore(event.target.value)}/>Understanding?

<button onClick={handleClick}>Next</button>
  </section>
)
}

export default UnderstandingContent;