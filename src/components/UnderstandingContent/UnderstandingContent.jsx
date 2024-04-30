import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

function UnderstandingContent() {
  const [scoreUnderstanding, setScoreUnderstanding] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    console.log(`adding understanding score`, { scoreUnderstanding });

    let action = {
      type: 'ADD_UNDERSTANDING_SCORE',
      payload: scoreUnderstanding 
    };

    dispatch(action);

    alert('Headed to Being Supported page');
    history.push('/support')
  }
return (<>
  <section>

<h2>How well are you understanding the content?</h2>
<input
required
placeholder="Understanding 1-5"
value={scoreUnderstanding}
onChange={(event) => setScoreUnderstanding(event.target.value)}/>Understanding?

<button onClick={handleClick}>Next</button>
  </section>
  </>
)
}

export default UnderstandingContent;